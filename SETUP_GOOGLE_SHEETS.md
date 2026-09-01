# 📋 คู่มือตั้งค่า Google Sheets สำหรับเก็บฟีดแบค

ทำตามขั้นตอนนี้ทีละขั้น ใช้เวลาประมาณ **10 นาที**

---

## ขั้นตอนที่ 1 — สร้าง Google Sheets

1. ไปที่ https://sheets.google.com
2. คลิก **"+ สร้าง"** (Blank spreadsheet)
3. ตั้งชื่อไฟล์ว่า `RotFaiCheck Feedback`
4. ที่ **แถวที่ 1** พิมพ์หัวคอลัมน์ตามนี้ (แต่ละช่องเว้นด้วย Tab):

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Message |

---

## ขั้นตอนที่ 2 — สร้าง Google Apps Script

1. ใน Google Sheets ให้คลิกเมนู **Extensions (ส่วนขยาย)**
2. คลิก **Apps Script**
3. จะเปิดหน้าต่างใหม่ขึ้นมา — **ลบโค้ดเดิมทั้งหมด** ออก
4. **วางโค้ดด้านล่างนี้ลงไป:**

```javascript
/**
 * ============================================================
 * Google Apps Script — รับข้อมูลจากฟอร์มและบันทึกลง Google Sheets
 * โปรเจกต์: RotFaiCheck — ระบบเก็บฟีดแบค
 * ============================================================
 */

/**
 * ฟังก์ชัน doPost — ถูกเรียกเมื่อมีการส่งข้อมูลแบบ POST มา
 * รับข้อมูลจากฟอร์มใน contact.html แล้วบันทึกลง Sheet
 * @param {Object} e - Event object ที่มีข้อมูลจากฟอร์ม
 */
function doPost(e) {
  try {
    // เปิด Google Sheets ปัจจุบัน (Sheet แรก)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // ดึงข้อมูลจากฟอร์มที่ส่งมา
    const timestamp = e.parameter.timestamp || new Date().toLocaleString('th-TH');
    const name      = e.parameter.name      || '';
    const email     = e.parameter.email     || '';
    const phone     = e.parameter.phone     || '(ไม่ระบุ)';
    const message   = e.parameter.message   || '';

    // เพิ่มแถวใหม่ลงใน Sheet (ต่อท้ายข้อมูลที่มีอยู่)
    sheet.appendRow([timestamp, name, email, phone, message]);

    // ส่งผลลัพธ์กลับ (success)
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // ส่งข้อความ error กลับ
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * ฟังก์ชัน doGet — ใช้ทดสอบว่า Script ทำงานได้
 * เปิด URL ของ Web App ใน Browser จะเห็นข้อความนี้
 */
function doGet(e) {
  return ContentService
    .createTextOutput('RotFaiCheck Feedback API is running ✅')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

5. กด **Ctrl+S** เพื่อบันทึก

---

## ขั้นตอนที่ 3 — Deploy เป็น Web App

1. คลิกปุ่ม **"Deploy"** (มุมขวาบน)
2. เลือก **"New deployment"**
3. คลิกไอคอน ⚙️ แล้วเลือก **"Web app"**
4. ตั้งค่าดังนี้:
   - **Description:** `RotFaiCheck Feedback v1`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone` ← **สำคัญมาก!**
5. คลิก **"Deploy"**
6. คลิก **"Authorize access"** → เลือก Google account ของคุณ → Allow
7. **Copy URL** ที่แสดงขึ้นมา (จะมีหน้าตาแบบนี้):
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## ขั้นตอนที่ 4 — นำ URL ไปใส่ใน `contact.html`

1. เปิดไฟล์ `contact.html`
2. หาบรรทัดนี้:
   ```javascript
   const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. แทนที่ด้วย URL ที่ Copy มา เช่น:
   ```javascript
   const SHEET_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. บันทึกไฟล์และ Push ขึ้น GitHub

---

## ขั้นตอนที่ 5 — ทดสอบ

1. เปิดหน้า `contact.html` บนเว็บ
2. กรอกข้อมูลและกดปุ่ม **"ส่งข้อความ"**
3. ถ้าสำเร็จจะขึ้น ✅ ส่งข้อความสำเร็จ!
4. เปิด Google Sheets ดู — จะมีแถวข้อมูลใหม่ปรากฏขึ้น

---

## ผลลัพธ์ที่ได้ใน Google Sheets

| Timestamp | Name | Email | Phone | Message |
|-----------|------|-------|-------|---------|
| 1/9/2568 09:30:00 | สมชาย ใจดี | somchai@gmail.com | 089-xxx-xxxx | ระบบดีมากครับ |
| 1/9/2568 10:15:00 | สมหญิง รักเรียน | somying@gmail.com | (ไม่ระบุ) | ขอบคุณสำหรับข้อมูล |

---

## ❗ ข้อควรระวัง

- **อย่าแชร์ URL ของ Apps Script** ต่อสาธารณะ (ใส่ไว้ใน code ส่วนตัวก็พอ)
- ถ้า Deploy แล้วเปลี่ยนโค้ด Script ต้อง **Deploy ใหม่** ด้วย (New deployment)
- Google Apps Script ฟรี แต่มีโควต้าวันละ **20,000 requests** (เกินพอสำหรับโปรเจกต์นี้)
