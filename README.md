# 🚆 RotFaiCheck — ระบบตรวจสอบรอบและตารางเวลารถไฟไทย

> เว็บไซต์ระบบตรวจสอบรอบรถไฟ ตารางเวลาเดินรถ สถานะขบวนรถประจำสถานี และอัตราค่าโดยสาร
> พัฒนาจาก UI Mockup ใน Figma สู่เว็บไซต์ที่ใช้งานได้จริง (Live Website)

---

## 🌐 Live Website

**URL:** https://love1cat2567-glitch.github.io/train-schedule-website/

---

## 🎨 Figma Design

**URL:** https://www.figma.com/design/Loc8X9oR0rieH0fdsnfS1J/Schedule-_%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%81?node-id=0-1&t=unLM4pXa3xPYvJ4s-1

---

## 🎯 Project Objectives

1. เพื่อแปลงผลงานการออกแบบ UI/UX จาก Figma มาเป็นเว็บไซต์จริงที่เข้าถึงได้ผ่านอินเทอร์เน็ต
2. เพื่อพัฒนาระบบตรวจสอบรอบรถไฟ ตารางเวลาขบวนรถ ข้อมูลสถานี และอัตราค่าโดยสารรถไฟไทย
3. เพื่อฝึกฝนการจัดการข้อมูลแบบจำลองฐานข้อมูล (Mock Database) ด้วย JavaScript ล้วน โดยไม่ต้องพึ่งพา Backend Server
4. เพื่อรองรับการแสดงผลทุกขนาดหน้าจอ (Responsive Design — Desktop และ Mobile)
5. เพื่อฝึกการใช้ Git และ GitHub ในการควบคุมเวอร์ชันและเผยแพร่โปรเจกต์จริง
6. เพื่อใช้ AI อย่างโปร่งใส ตรวจสอบผลลัพธ์ และรับผิดชอบต่อความถูกต้องของโค้ดทั้งหมด

---

## 🛠️ Technology Stack

| หมวด | เครื่องมือที่ใช้ | รายละเอียด |
|------|----------------|-----------|
| **Design** | Figma | ออกแบบ UI/UX Mockup ทุกหน้าก่อนลงมือพัฒนา |
| **Frontend** | HTML5, CSS3, JavaScript (ES6) | โครงสร้างหน้าเว็บ สไตล์ และ Logic ทั้งหมด |
| **CSS / UI** | Vanilla CSS + Flexbox + CSS Grid | เขียน CSS เองทั้งหมด ไม่ใช้ Framework CSS |
| **Framework** | ไม่ใช้ Framework | เป็น Static HTML/CSS/JS ล้วน เพื่อความเรียบง่าย |
| **Build Tool** | ไม่มี (เปิดไฟล์ HTML โดยตรง) | ไม่ต้อง Build หรือ Compile ใดๆ |
| **Assets** | Google Fonts (Kanit), Font Awesome 6.4.0 | Font ภาษาไทยและไอคอนทั้งหมด |
| **Version Control** | Git และ GitHub | จัดเก็บโค้ดและติดตามประวัติการแก้ไข |
| **Hosting** | GitHub Pages | Deploy เว็บไซต์แบบฟรี ไม่ต้องมี Server |
| **AI Tools** | Gemini (Antigravity IDE) | ช่วยวางโครงสร้าง Mock Database และ JavaScript Logic |
| **Testing** | Chrome DevTools, Responsive Mode | ทดสอบ Responsive บน Desktop และ Mobile |

---

## ✨ Features

### หน้าที่มีทั้งหมด (5 หน้า)

| หน้า | ไฟล์ | ความสามารถหลัก |
|------|------|----------------|
| หน้าแรก | `index.html` | ค้นหารอบรถไฟ ต้นทาง → ปลายทาง แสดงผลแบบ Dynamic |
| ตารางเวลา | `schedule.html` | แสดงตารางจอดทุกสถานีของขบวนที่เลือก |
| สถานีรถไฟ | `station.html` | ค้นหาขบวนรถตามสถานีและสิ่งอำนวยความสะดวก |
| อัตราค่าโดยสาร | `fare.html` | ตารางค่าโดยสารแยกชั้นที่นั่ง |
| ติดต่อเรา | `contact.html` | ฟอร์มส่งข้อความ/ฟีดแบค เชื่อม Google Sheets |

### Interaction ที่มี (มากกว่า 2 รายการ)

1. **Form Validation** — ตรวจสอบความถูกต้องก่อนส่งฟอร์ม (contact.html)
2. **Dynamic Search Results** — ผลการค้นหาแสดง/ซ่อนโดยไม่ต้อง Reload (index.html)
3. **URL Parameter Passing** — ส่งค่า `?id=` ระหว่างหน้าเพื่อแสดงข้อมูลทันที
4. **Loading State** — ปุ่มเปลี่ยนเป็น spinner ขณะกำลังส่งข้อมูล

---

## 🎨 Design Implementation

### การนำ Figma มาใช้

| องค์ประกอบ | รายละเอียดการ Implement |
|-----------|----------------------|
| **Color Palette** | `--primary-color: #831b2d` (แดงเข้ม), `--secondary-color: #2b4b39` (เขียวเข้ม) ตามที่ออกแบบใน Figma |
| **Typography** | ใช้ Kanit Font ทุกขนาด น้ำหนัก 300/400/500/600 ตาม Figma spec |
| **Hero Section** | Background รูปรถไฟ + Search Box กึ่งกลาง ตรงตาม Figma Layout |
| **Navigation** | Pill-shaped buttons ใน nav bar สีแดงเข้ม ตรงตาม Figma |
| **Train Cards** | Badge สีต่างกันตามประเภทรถ (ด่วนพิเศษ/ด่วน/เร็ว/ธรรมดา) |
| **Footer** | 3-column layout สีแดงเข้ม ตรงตาม Figma |

### Color System

```css
--primary-color:   #831b2d;  /* แดงเข้ม — Header, Badge, Footer */
--primary-hover:   #6a1524;  /* แดงเข้มกว่า — Hover state */
--secondary-color: #2b4b39;  /* เขียวเข้ม — ปุ่มค้นหา */
--text-dark:       #333333;  /* ข้อความหลัก */
--bg-light:        #f5f5f5;  /* พื้นหลังอ่อน */
```

---

## 📁 โครงสร้างไฟล์ (File Structure)

```
RotFaiCheck/
│
├── index.html          # หน้าแรก — ระบบค้นหารอบรถไฟ
├── schedule.html       # หน้าตารางเวลาขบวนรถ
├── station.html        # หน้าสถานีรถไฟ
├── fare.html           # หน้าอัตราค่าโดยสาร
├── contact.html        # หน้าติดต่อเรา + ฟอร์มฟีดแบค
│
├── data.js             # Mock Database (สถานี 12 แห่ง + ขบวนรถ 8 ขบวน)
├── style.css           # CSS Design System ทั้งระบบ
├── README.md           # เอกสารอธิบายโปรเจกต์
├── SETUP_GOOGLE_SHEETS.md  # คู่มือตั้งค่าฐานข้อมูลรับฟีดแบค
│
├── shutterstock_2122662680_resize.jpg  # ภาพพื้นหลัง Hero
└── images.jpg          # ภาพประกอบข่าว
```

---

## 🗄️ Mock Database (`data.js`)

ระบบไม่ต้องใช้ Backend — ข้อมูลทั้งหมดเก็บใน `data.js`

### สถานีรถไฟ (12 สถานี — ครอบคลุมทุกภาค)

| ภาค | สถานี |
|-----|-------|
| กลาง | กรุงเทพอภิวัฒน์, ดอนเมือง, รังสิต, อยุธยา |
| เหนือ | เชียงใหม่, ลำปาง |
| เหนือตอนล่าง | พิษณุโลก, นครสวรรค์ |
| ตะวันออกเฉียงเหนือ | อุดรธานี, นครราชสีมา |
| ใต้ | สุราษฎร์ธานี, หาดใหญ่ |

### ขบวนรถ (8 ขบวน)

| หมายเลข | ประเภท | เส้นทาง | เวลาออก |
|---------|--------|---------|---------|
| 7 | ด่วนพิเศษ | กรุงเทพอภิวัฒน์ → เชียงใหม่ | 18:00 |
| 9 | ด่วนพิเศษ | กรุงเทพอภิวัฒน์ → เชียงใหม่ | 19:30 |
| 51 | ด่วน | กรุงเทพอภิวัฒน์ → นครราชสีมา | 06:00 |
| 171 | เร็ว | กรุงเทพอภิวัฒน์ → หาดใหญ่ | 14:30 |
| 201 | ธรรมดา | สุราษฎร์ธานี → กรุงเทพอภิวัฒน์ | 07:00 |
| 303 | ด่วน | กรุงเทพอภิวัฒน์ → อุดรธานี | 20:00 |
| 489 | ท้องถิ่น | เชียงใหม่ → กรุงเทพอภิวัฒน์ | 06:30 |
| 4387 | ชานเมือง | กรุงเทพอภิวัฒน์ → รังสิต | 07:30 |

---

## 📱 Responsive Design

| Breakpoint | อุปกรณ์ | การปรับ Layout |
|-----------|---------|---------------|
| > 768px | Desktop / Tablet | 2-3 column grid, Navigation แนวนอน |
| ≤ 768px | Mobile | 1 column, Navigation wrap, Form stack แนวตั้ง |

### รายละเอียดการปรับ

- **Header** — เปลี่ยนเป็น Column layout, Nav wrap กึ่งกลาง
- **Search Form** — `.form-row` จาก 2 column → 1 column
- **News Grid** — จาก `1fr 1fr` → `1fr`
- **Footer** — จาก `1fr 1fr 1fr` → `1fr`
- **Train Cards** — จาก Row → Column layout
- **Contact** — จาก 2 column → 1 column

---

## 🤖 AI Usage (รายงานการใช้ AI)

### 1. เครื่องมือ AI ที่ใช้
- **Gemini** ผ่าน Antigravity IDE (AI Coding Assistant)

### 2. ขั้นตอนที่ใช้ AI ช่วย

| ขั้นตอน | AI ช่วยด้านไหน |
|--------|---------------|
| วางโครงสร้างข้อมูล | ออกแบบ Object Structure ของ `STATIONS[]` และ `TRAINS[]` ใน `data.js` |
| เขียน JavaScript Logic | ฟังก์ชัน `searchTrains()`, `getTrainsByStation()`, `getTrainById()` |
| ระบบ URL Parameter | ส่ง `?id=` ระหว่างหน้า index → schedule |
| Dynamic DOM | สร้าง Dropdown, ตาราง และ Card จากข้อมูลจริงแทนการ hardcode |
| ฟอร์มและ Validation | ตรวจสอบ input และส่งข้อมูลไป Google Sheets |
| CSS เพิ่มเติม | Badge สีประเภทรถ, ปุ่ม `.btn-detail`, Responsive fixes |

### 3. Prompt สำคัญ (อย่างน้อย 3 ตัวอย่าง)

**Prompt 1 — ฐานข้อมูลสมมติ:**
> *"สร้าง JavaScript Mock Database สำหรับสถานีรถไฟไทย 12 สถานีครอบคลุมทุกภาค แต่ละสถานีมี id, name, region, address, facilities[] และขบวนรถ 8 ขบวน แต่ละขบวนมีตารางจอด stops[] พร้อมเวลาถึงและเวลาออกของแต่ละสถานี"*

**Prompt 2 — ฟังก์ชันค้นหา:**
> *"เขียนฟังก์ชัน searchTrains(fromId, toId) ที่กรองขบวนรถซึ่งผ่านทั้งสถานีต้นทางและปลายทาง โดยต้นทางต้องอยู่ก่อนปลายทางใน stops[] ใช้ findIndex() เพื่อเช็คลำดับ"*

**Prompt 3 — ระบบส่งฟอร์ม Google Sheets:**
> *"เขียนฟังก์ชัน submitFeedback() สำหรับส่งข้อมูลฟอร์มไปยัง Google Apps Script ด้วย fetch() แบบ mode: no-cors พร้อม validation ก่อนส่ง และแสดง loading state บนปุ่มขณะกำลังส่ง"*

### 4. ผลลัพธ์ที่ได้จาก AI

| ฟังก์ชัน/ส่วน | ผลลัพธ์ที่ AI สร้าง |
|--------------|-------------------|
| `STATIONS[]` | อาร์เรย์ Object 12 สถานีพร้อม field ครบ |
| `TRAINS[]` | อาร์เรย์ Object 8 ขบวนพร้อม `stops[]` ทุกสถานี |
| `searchTrains()` | ฟังก์ชัน filter + findIndex ทำงานได้ถูกต้อง |
| `populateStationDropdowns()` | ลูปสร้าง `<option>` จากข้อมูลจริง |
| `submitFeedback()` | ระบบ fetch + validation + loading state |

### 5. ส่วนที่แก้ไขเองหลังรับโค้ดจาก AI

- ปรับข้อมูลเวลาใน `stops[]` ให้สมจริงและสอดคล้องกับเส้นทางรถไฟไทยจริง
- แก้ไข HTML Structure ในทุกหน้าให้ตรงกับ Figma Design ที่ออกแบบไว้
- เพิ่ม `note` ใน stops บางสถานีที่รถไม่จอด (เช่น `"ไม่จอด"`)
- ปรับ CSS Color ให้ตรงกับ Design System ใน `style.css` เดิม
- แก้ไข logic วันที่ให้ใช้ `th-TH` locale ถูกต้อง

### 6. การตรวจสอบความถูกต้องของผลลัพธ์

- เปิดทดสอบใน Browser ทุกครั้งหลังนำโค้ดจาก AI ไปใช้
- ทดสอบค้นหาทุก combination ของสถานีต้นทาง-ปลายทาง
- เปิด Console ตรวจหา Error ก่อน Push
- ทดสอบ Responsive ด้วย Chrome DevTools ทั้ง Desktop และ Mobile

### 7. ตัวอย่างโค้ดที่ AI สร้าง และคำอธิบาย

```javascript
// ฟังก์ชันนี้ AI สร้างให้ — searchTrains(fromId, toId)
// หน้าที่: กรองขบวนรถที่ผ่านทั้งสองสถานีตามลำดับ
function searchTrains(fromId, toId) {
  return TRAINS.filter(train => {
    // หาตำแหน่งของสถานีต้นทางในตารางจอด
    const fromIdx = train.stops.findIndex(s => s.stationId === fromId);
    // หาตำแหน่งของสถานีปลายทางในตารางจอด
    const toIdx   = train.stops.findIndex(s => s.stationId === toId);
    // ขบวนต้องจอดทั้งสองสถานี และต้นทางต้องอยู่ก่อนปลายทาง
    return fromIdx !== -1 && toIdx !== -1 && fromIdx < toIdx;
  });
}
```

> **อธิบาย:** `findIndex()` คืนค่าตำแหน่ง (index) ของสถานีใน array stops[] — ถ้า `-1` แปลว่าไม่มี ถ้า `fromIdx < toIdx` แปลว่ารถวิ่งในทิศทางที่ถูกต้อง (ต้นทาง → ปลายทาง)

### 8. สิ่งที่เรียนรู้จากการใช้ AI

- AI ช่วยประหยัดเวลาในการเขียน boilerplate code แต่ต้องตรวจสอบ logic ทุกครั้ง
- Prompt ที่ละเอียดและชัดเจนได้โค้ดที่ดีกว่า Prompt กว้างๆ
- โค้ดจาก AI อาจไม่ตรง Design ที่ออกแบบไว้ ต้องปรับเองเสมอ
- การเข้าใจโค้ดที่ AI สร้างสำคัญกว่าการใช้งานมันโดยไม่รู้ว่าทำงานอย่างไร

---

## 🚀 Deployment

**Hosting:** GitHub Pages

### ขั้นตอน Deploy

```bash
# 1. Clone หรือ Init repository
git init
git add .
git commit -m "Initial commit"

# 2. เชื่อม GitHub
git remote add origin https://github.com/USERNAME/RotFaiCheck.git
git branch -M main
git push -u origin main
```

3. ไปที่ GitHub Repository → **Settings** → **Pages**
4. เลือก Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
5. กด Save → รอประมาณ 2-3 นาที → จะได้ URL ของเว็บ

**Build Command:** ไม่มี (Static HTML — ไม่ต้อง Build)

**Live URL:** `https://USERNAME.github.io/RotFaiCheck/`

---

## ⚙️ วิธีรันในเครื่อง (Local)

```bash
# Clone โปรเจกต์
git clone https://github.com/USERNAME/RotFaiCheck.git
cd RotFaiCheck

# เปิด index.html ใน Browser โดยตรง
# หรือใช้ Live Server Extension ใน VS Code
```

> ไม่ต้องติดตั้ง Node.js หรือ Package ใดๆ — เป็น Frontend-only ทั้งหมด

---

## 🧗 Challenges (ปัญหาที่พบและแนวทางแก้ไข)

| ปัญหา | สาเหตุ | แนวทางแก้ไข | สิ่งที่เรียนรู้ |
|-------|--------|------------|--------------|
| ระบบค้นหาไม่แสดงผล | ลืม import `data.js` ก่อน JavaScript inline | เพิ่ม `<script src="data.js">` ก่อน script ที่ใช้ STATIONS | ลำดับการโหลด Script สำคัญมาก |
| `fetch()` ส่งไป Apps Script แล้วขึ้น CORS Error | Google Apps Script ไม่ support CORS headers | ใช้ `mode: 'no-cors'` ใน fetch options | Static site มีข้อจำกัดเรื่อง Cross-origin |
| Dropdown แสดงสถานีซ้ำสองครั้ง | `DOMContentLoaded` ถูกเรียกสองครั้ง | เช็ค `if` ก่อนสร้าง options ว่ายังว่างอยู่ | ต้องระวัง Event Listener ที่อาจ fire ซ้ำ |
| Layout แตกบน Mobile | ใช้ fixed width แทน max-width | เปลี่ยนเป็น `max-width: 90%` และใช้ `flex-wrap` | ควร Design Mobile-first ตั้งแต่ต้น |
| ตาราง Train Card ดูยากบนจอเล็ก | ข้อมูลหลายคอลัมน์ใน row เดียว | เพิ่ม `flex-direction: column` ใน Media Query | Responsive ต้องทดสอบบน Device จริง |


---

## 👤 Author

| รายการ | ข้อมูล |
|--------|--------|
| **ชื่อ-นามสกุล** | [ใส่ชื่อของคุณ] |
| **รหัสนักศึกษา** | [ใส่รหัสนักศึกษาของคุณ] |
| **สาขาวิชา** | [ใส่สาขาวิชาของคุณ] |
| **ชั้นปี / ห้อง** | [ใส่ชั้นปีและห้องเรียน] |
| **อาจารย์ผู้สอน** | [ใส่ชื่ออาจารย์] |
| **ภาคการศึกษา** | ภาคปลาย ปีการศึกษา 2568 |

---

## 📄 License

โปรเจกต์นี้จัดทำเพื่อการศึกษาเท่านั้น ข้อมูลสถานีและตารางเวลาเป็นข้อมูลสมมติ ไม่ใช่ข้อมูลจริงของการรถไฟแห่งประเทศไทย (ร.ฟ.ท.)
