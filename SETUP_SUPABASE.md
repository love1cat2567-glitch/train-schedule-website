# ⚡ คู่มือตั้งค่า Supabase Database สำหรับเก็บฟีดแบค

Supabase เป็นระบบฐานข้อมูล Cloud PostgreSQL ที่เปิดใช้งานฟรีและตั้งค่าง่ายมากๆ ครับ

---

## ขั้นตอนที่ 1 — สร้าง Project ใน Supabase

1. ไปที่หน้าเว็บ https://supabase.com/dashboard (ตามที่คุณเปิดไว้อยู่)
2. คลิกปุ่ม **"+ New organization"** แล้วตั้งชื่อเช่น `MySchoolProjects`
3. จากนั้นกดปุ่ม **"+ New project"**
4. กรอกข้อมูล:
   - **Name:** `RotFaiCheck`
   - **Database Password:** (กำหนดรหัสผ่านอะไรก็ได้ จำไว้หรือกดสุ่มได้)
   - **Region:** เลือก `Singapore` (ใกล้ไทยที่สุด)
5. กด **"Create new project"** แล้วรอประมาณ 1-2 นาทีให้ระบบสร้างฐานข้อมูลเสร็จ

---

## ขั้นตอนที่ 2 — สร้างตาราง `feedbacks` (Table Editor)

1. เมนูแถบซ้าย เลือก **Table Editor** (ไอคอนตาราง)
2. กดปุ่ม **"Create a new table"**
3. ตั้งชื่อ **Name:** `feedbacks`
4. ตรวจสอบให้แน่ใจว่าติ๊กถูกที่ **"Enable Row Level Security (RLS)"**
5. ในส่วนของ **Columns** เพิ่มคอลัมน์ดังนี้:

| Name | Type | Default Value / Extra |
|------|------|-----------------------|
| `id` | `int8` (หรือ `uuid`) | Primary Key (มีมาให้อยู่แล้ว) |
| `created_at` | `timestamptz` | `now()` (มีมาให้อยู่แล้ว) |
| `name` | `text` | (บังคับกรอก) |
| `email` | `text` | (บังคับกรอก) |
| `phone` | `text` | (Nullable ไม่บังคับ) |
| `message` | `text` | (บังคับกรอก) |

6. กด **Save** ด้านล่างสุด

---

## ขั้นตอนที่ 3 — ตั้งค่า RLS Policy ให้ยอมรับการส่งฟอร์มจากหน้าเว็บ (Insert Policy)

เนื่องจากเว็บเราเป็นแบบ Public ให้คนทั่วไปส่งฟีดแบคได้ ต้องอนุญาตให้ Insert ข้อมูลได้:

1. ไปที่เมนูแถบซ้าย เลือก **Authentication** -> **Policies** (หรือเปิดในหน้า Table `feedbacks` แล้วกด **"New Policy"**)
2. เลือกตาราง `feedbacks` แล้วกด **"New Policy"**
3. เลือก **"Get started quickly"** -> **"Enable insert access for everyone"** (หรือเลือก Create from scratch):
   - **Policy name:** `Enable insert for public`
   - **Target roles:** `anon` (หรือ public)
   - **Allowed operation:** `INSERT`
   - **WITH CHECK expression:** `true`
4. กด **Save Policy**

*(หรือหากต้องการสร้างด้วย SQL Editor ให้ไปที่เมนู **SQL Editor** แล้ววางคำสั่งนี้แล้วกด Run):*
```sql
CREATE POLICY "Enable insert for all users" ON "public"."feedbacks"
FOR INSERT WITH CHECK (true);
```

---

## ขั้นตอนที่ 4 — คัดลอก API Keys มาใส่ใน `contact.html`

1. เมนูแถบซ้าย ไปที่ **Project Settings** (ไอคอนฟันเฟือง ⚙️) -> **API**
2. คัดลอกค่า 2 อย่างนี้:
   - **Project URL** (เช่น `https://xyzwhatever.supabase.co`)
   - **anon / public key** (รหัสยาวๆ ในช่อง Project API keys)
3. เปิดไฟล์ [`contact.html`](file:///c:/laragon/www/049phuttimon/kk/Schedule/contact.html) ในโค้ดของคุณ
4. แทนที่ตัวแปรในบรรทัด 190-191:
   ```javascript
   const SUPABASE_URL = 'https://xyzwhatever.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsIn...';
   ```
5. กดบันทึกไฟล์ และ Push ขึ้น GitHub ได้เลย!

---

## ขั้นตอนที่ 5 — ดูข้อมูลฟีดแบคที่ถูกส่งเข้ามา

- เมื่อมีคนกรอกฟอร์มจากหน้าเว็บ คุณสามารถเข้าไปดูข้อมูลที่ส่งมาได้ทันทีที่:
  **Supabase Dashboard** -> **Table Editor** -> ตาราง **feedbacks**
