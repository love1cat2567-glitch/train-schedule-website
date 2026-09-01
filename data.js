/**
 * ============================================================
 * data.js — ฐานข้อมูลสมมติ (Mock Database)
 * โปรเจกต์: RotFaiCheck — ระบบเช็ครอบรถไฟ
 * ============================================================
 * ไฟล์นี้เก็บข้อมูลสมมติทั้งหมดแทนฐานข้อมูลจริง
 * ในโปรเจกต์จริงควรใช้ API หรือ Backend เช่น PHP + MySQL
 * ============================================================
 */

/* ----------------------------------------------------------
   1. ข้อมูลสถานีรถไฟ (Stations)
   รูปแบบ: { id, name, region, address, facilities[] }
   ---------------------------------------------------------- */
const STATIONS = [
  {
    id: "bkk",
    name: "กรุงเทพอภิวัฒน์",
    region: "กลาง",
    address: "เขตจตุจักร กรุงเทพมหานคร",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ", "WiFi", "ศูนย์บริการ"],
    lat: 13.8215,
    lng: 100.5450,
  },
  {
    id: "cmi",
    name: "เชียงใหม่",
    region: "เหนือ",
    address: "อ.เมือง จ.เชียงใหม่",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ", "ตู้เอทีเอ็ม"],
    lat: 18.7987,
    lng: 98.9724,
  },
  {
    id: "nst",
    name: "นครสวรรค์",
    region: "เหนือตอนล่าง",
    address: "อ.เมือง จ.นครสวรรค์",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ"],
    lat: 15.6961,
    lng: 100.1167,
  },
  {
    id: "ayt",
    name: "อยุธยา",
    region: "กลาง",
    address: "อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา",
    facilities: ["ห้องน้ำ", "ร้านอาหาร"],
    lat: 14.3572,
    lng: 100.5736,
  },
  {
    id: "lpg",
    name: "ลำปาง",
    region: "เหนือ",
    address: "อ.เมือง จ.ลำปาง",
    facilities: ["ห้องน้ำ", "ที่จอดรถ"],
    lat: 18.2888,
    lng: 99.4938,
  },
  {
    id: "phb",
    name: "พิษณุโลก",
    region: "เหนือตอนล่าง",
    address: "อ.เมือง จ.พิษณุโลก",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ", "WiFi"],
    lat: 16.8211,
    lng: 100.2659,
  },
  {
    id: "udth",
    name: "อุดรธานี",
    region: "ตะวันออกเฉียงเหนือ",
    address: "อ.เมือง จ.อุดรธานี",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ"],
    lat: 17.4147,
    lng: 102.7860,
  },
  {
    id: "nkratch",
    name: "นครราชสีมา (โคราช)",
    region: "ตะวันออกเฉียงเหนือ",
    address: "อ.เมือง จ.นครราชสีมา",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ", "ศูนย์บริการ"],
    lat: 14.9799,
    lng: 102.0978,
  },
  {
    id: "srt",
    name: "สุราษฎร์ธานี",
    region: "ใต้",
    address: "อ.เมือง จ.สุราษฎร์ธานี",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ"],
    lat: 9.1382,
    lng: 99.3218,
  },
  {
    id: "hat",
    name: "หาดใหญ่",
    region: "ใต้",
    address: "อ.หาดใหญ่ จ.สงขลา",
    facilities: ["ห้องน้ำ", "ร้านอาหาร", "ที่จอดรถ", "WiFi", "ศูนย์บริการ"],
    lat: 7.0066,
    lng: 100.4762,
  },
  {
    id: "don",
    name: "ดอนเมือง",
    region: "กลาง",
    address: "เขตดอนเมือง กรุงเทพมหานคร",
    facilities: ["ห้องน้ำ", "ร้านอาหาร"],
    lat: 13.9198,
    lng: 100.6054,
  },
  {
    id: "rng",
    name: "รังสิต",
    region: "กลาง",
    address: "อ.ธัญบุรี จ.ปทุมธานี",
    facilities: ["ห้องน้ำ", "ที่จอดรถ"],
    lat: 14.0246,
    lng: 100.6201,
  },
];

/* ----------------------------------------------------------
   2. ข้อมูลขบวนรถไฟ (Trains)
   ประเภท: ด่วนพิเศษ, ด่วน, เร็ว, ธรรมดา, ท้องถิ่น, ชานเมือง
   ---------------------------------------------------------- */
const TRAINS = [
  {
    id: "T7",
    number: "7",
    type: "ด่วนพิเศษ",
    typeClass: "type-special",
    from: "bkk",
    to: "cmi",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "เชียงใหม่",
    departTime: "18:00",
    arriveTime: "07:25",
    // ตารางเวลาจอดแต่ละสถานี
    stops: [
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "-", depart: "18:00", note: "ต้นทาง" },
      { stationId: "don", station: "ดอนเมือง",        arrive: "18:32", depart: "18:34", note: "" },
      { stationId: "rng", station: "รังสิต",           arrive: "18:55", depart: "18:57", note: "" },
      { stationId: "ayt", station: "อยุธยา",           arrive: "19:50", depart: "19:53", note: "" },
      { stationId: "nst", station: "นครสวรรค์",        arrive: "22:10", depart: "22:15", note: "" },
      { stationId: "phb", station: "พิษณุโลก",         arrive: "00:42", depart: "00:47", note: "" },
      { stationId: "lpg", station: "ลำปาง",            arrive: "04:15", depart: "04:20", note: "" },
      { stationId: "cmi", station: "เชียงใหม่",        arrive: "07:25", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T9",
    number: "9",
    type: "ด่วนพิเศษ",
    typeClass: "type-special",
    from: "bkk",
    to: "cmi",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "เชียงใหม่",
    departTime: "19:30",
    arriveTime: "09:00",
    stops: [
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "-",    depart: "19:30", note: "ต้นทาง" },
      { stationId: "don", station: "ดอนเมือง",        arrive: "20:01", depart: "20:03", note: "" },
      { stationId: "ayt", station: "อยุธยา",           arrive: "21:10", depart: "21:12", note: "" },
      { stationId: "nst", station: "นครสวรรค์",        arrive: "23:30", depart: "23:35", note: "" },
      { stationId: "phb", station: "พิษณุโลก",         arrive: "02:05", depart: "02:10", note: "" },
      { stationId: "lpg", station: "ลำปาง",            arrive: "05:45", depart: "05:50", note: "" },
      { stationId: "cmi", station: "เชียงใหม่",        arrive: "09:00", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T51",
    number: "51",
    type: "ด่วน",
    typeClass: "type-express",
    from: "bkk",
    to: "nkratch",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "นครราชสีมา (โคราช)",
    departTime: "06:00",
    arriveTime: "10:45",
    stops: [
      { stationId: "bkk",     station: "กรุงเทพอภิวัฒน์",    arrive: "-",    depart: "06:00", note: "ต้นทาง" },
      { stationId: "don",     station: "ดอนเมือง",           arrive: "06:30", depart: "06:32", note: "" },
      { stationId: "rng",     station: "รังสิต",              arrive: "06:50", depart: "06:52", note: "" },
      { stationId: "ayt",     station: "อยุธยา",              arrive: "07:45", depart: "07:48", note: "" },
      { stationId: "nkratch", station: "นครราชสีมา (โคราช)", arrive: "10:45", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T171",
    number: "171",
    type: "เร็ว",
    typeClass: "type-rapid",
    from: "bkk",
    to: "hat",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "หาดใหญ่",
    departTime: "14:30",
    arriveTime: "08:00",
    stops: [
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "-",    depart: "14:30", note: "ต้นทาง" },
      { stationId: "ayt", station: "อยุธยา",           arrive: "15:40", depart: "15:43", note: "" },
      { stationId: "srt", station: "สุราษฎร์ธานี",     arrive: "02:30", depart: "02:40", note: "" },
      { stationId: "hat", station: "หาดใหญ่",          arrive: "08:00", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T201",
    number: "201",
    type: "ธรรมดา",
    typeClass: "type-normal",
    from: "srt",
    to: "bkk",
    fromName: "สุราษฎร์ธานี",
    toName: "กรุงเทพอภิวัฒน์",
    departTime: "07:00",
    arriveTime: "22:40",
    stops: [
      { stationId: "srt", station: "สุราษฎร์ธานี",     arrive: "-",    depart: "07:00", note: "ต้นทาง" },
      { stationId: "hat", station: "หาดใหญ่",          arrive: "-",    depart: "-",    note: "ไม่จอด" },
      { stationId: "ayt", station: "อยุธยา",           arrive: "20:10", depart: "20:15", note: "" },
      { stationId: "don", station: "ดอนเมือง",         arrive: "22:05", depart: "22:10", note: "" },
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "22:40", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T489",
    number: "489",
    type: "ท้องถิ่น",
    typeClass: "type-local",
    from: "cmi",
    to: "bkk",
    fromName: "เชียงใหม่",
    toName: "กรุงเทพอภิวัฒน์",
    departTime: "06:30",
    arriveTime: "22:15",
    stops: [
      { stationId: "cmi", station: "เชียงใหม่",        arrive: "-",    depart: "06:30", note: "ต้นทาง" },
      { stationId: "lpg", station: "ลำปาง",            arrive: "08:45", depart: "08:50", note: "" },
      { stationId: "phb", station: "พิษณุโลก",         arrive: "12:20", depart: "12:30", note: "" },
      { stationId: "nst", station: "นครสวรรค์",        arrive: "15:00", depart: "15:10", note: "" },
      { stationId: "ayt", station: "อยุธยา",           arrive: "19:30", depart: "19:35", note: "" },
      { stationId: "don", station: "ดอนเมือง",         arrive: "21:45", depart: "21:50", note: "" },
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "22:15", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T303",
    number: "303",
    type: "ด่วน",
    typeClass: "type-express",
    from: "bkk",
    to: "udth",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "อุดรธานี",
    departTime: "20:00",
    arriveTime: "08:30",
    stops: [
      { stationId: "bkk",  station: "กรุงเทพอภิวัฒน์", arrive: "-",    depart: "20:00", note: "ต้นทาง" },
      { stationId: "ayt",  station: "อยุธยา",           arrive: "21:10", depart: "21:13", note: "" },
      { stationId: "nkratch", station: "นครราชสีมา",   arrive: "00:20", depart: "00:30", note: "" },
      { stationId: "udth", station: "อุดรธานี",         arrive: "08:30", depart: "-",    note: "ปลายทาง" },
    ],
  },
  {
    id: "T4387",
    number: "4387",
    type: "ชานเมือง",
    typeClass: "type-suburb",
    from: "bkk",
    to: "rng",
    fromName: "กรุงเทพอภิวัฒน์",
    toName: "รังสิต",
    departTime: "07:30",
    arriveTime: "08:50",
    stops: [
      { stationId: "bkk", station: "กรุงเทพอภิวัฒน์", arrive: "-",    depart: "07:30", note: "ต้นทาง" },
      { stationId: "don", station: "ดอนเมือง",         arrive: "08:00", depart: "08:02", note: "" },
      { stationId: "rng", station: "รังสิต",            arrive: "08:50", depart: "-",    note: "ปลายทาง" },
    ],
  },
];

/* ----------------------------------------------------------
   3. ข้อมูลรอบรถไฟ (Search Results)
   สำหรับค้นหาเที่ยว ต้นทาง → ปลายทาง
   ---------------------------------------------------------- */

/**
 * ฟังก์ชันค้นหาขบวนรถ
 * @param {string} fromId - รหัสสถานีต้นทาง
 * @param {string} toId   - รหัสสถานีปลายทาง
 * @returns {Array}       - รายการขบวนรถที่ผ่านทั้งสองสถานี
 */
function searchTrains(fromId, toId) {
  // กรองเฉพาะขบวนที่จอดทั้งสถานีต้นทางและปลายทาง
  // และสถานีต้นทางต้องอยู่ก่อนสถานีปลายทางในเส้นทาง
  return TRAINS.filter(train => {
    const fromIdx = train.stops.findIndex(s => s.stationId === fromId);
    const toIdx   = train.stops.findIndex(s => s.stationId === toId);
    return fromIdx !== -1 && toIdx !== -1 && fromIdx < toIdx;
  }).map(train => {
    const fromStop = train.stops.find(s => s.stationId === fromId);
    const toStop   = train.stops.find(s => s.stationId === toId);
    return {
      ...train,
      boardTime: fromStop.depart,
      alightTime: toStop.arrive,
    };
  });
}

/**
 * ฟังก์ชันค้นหาขบวนรถตามสถานี
 * @param {string} stationId - รหัสสถานี
 * @returns {Array}          - รายการขบวนรถที่จอดสถานีนั้น
 */
function getTrainsByStation(stationId) {
  return TRAINS.filter(train =>
    train.stops.some(s => s.stationId === stationId && s.note !== "ไม่จอด")
  );
}

/**
 * ฟังก์ชันค้นหาขบวนรถตาม ID
 * @param {string} trainId - รหัสขบวนรถ
 * @returns {Object|null}  - ข้อมูลขบวนรถ หรือ null ถ้าไม่พบ
 */
function getTrainById(trainId) {
  return TRAINS.find(t => t.id === trainId) || null;
}

/**
 * ฟังก์ชันค้นหาสถานี
 * @param {string} query - ชื่อสถานีที่ต้องการค้นหา
 * @returns {Array}      - รายการสถานีที่ตรงกัน
 */
function searchStations(query) {
  const q = query.toLowerCase();
  return STATIONS.filter(s => s.name.toLowerCase().includes(q));
}
