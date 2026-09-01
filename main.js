/* ============================================================
   main.js — JavaScript ร่วมสำหรับทุกหน้าของ RotFaiCheck
   ============================================================
   1. Hamburger Menu  — เปิด/ปิดเมนูมือถือพร้อม animation
   2. Scroll Animations — Intersection Observer reveal effects
   3. Header Scroll    — ใส่เงาเมื่อ scroll ลงมา
   4. Hero Parallax    — background เลื่อนช้ากว่า scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. HAMBURGER MENU
     กดปุ่ม 3 ขีด → slide panel จากขวา
     กด × / overlay / Escape / ลิงก์ → ปิดเมนู
     ---------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav    = document.getElementById('mobileNav');
  const closeBtn     = document.getElementById('mobileNavClose');

  if (hamburgerBtn && mobileNav) {

    // เปิดเมนูเมื่อกดปุ่ม hamburger
    hamburgerBtn.addEventListener('click', openMenu);

    // ปิดเมนูเมื่อกดปุ่ม × ใน panel
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // ปิดเมื่อคลิกพื้นที่มืด (overlay) นอก panel
    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) closeMenu();
    });

    // ปิดเมื่อกดลิงก์ใดๆ ใน mobile nav (แล้ว navigate ไปเพจนั้น)
    document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // ปิดเมื่อกดปุ่ม Escape บนคีย์บอร์ด
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /**
   * เปิด Mobile Nav Panel
   * - เพิ่ม class 'open' ให้ overlay → CSS จะ animate เข้ามา
   * - เพิ่ม class 'active' ให้ hamburger → 3 ขีดกลายเป็น ×
   * - ล็อค scroll ไม่ให้เลื่อน body ระหว่างเมนูเปิด
   */
  function openMenu() {
    mobileNav.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * ปิด Mobile Nav Panel
   * - ลบ class 'open' → CSS animate panel ออกไปทางขวา
   * - คืนสถานะ scroll body
   */
  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ----------------------------------------------------------
     2. SCROLL ANIMATIONS (Intersection Observer)
     ตรวจจับเมื่อ element เข้ามาใน viewport
     แล้วเพิ่ม class 'visible' เพื่อ trigger animation CSS
     ---------------------------------------------------------- */
  const animatables = document.querySelectorAll('.animate-on-scroll');

  if (animatables.length > 0) {
    const scrollObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // อ่าน delay จาก data-delay attribute (กำหนดไว้ตาม index)
            const delay = parseInt(entry.target.dataset.delay) || 0;
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);
            // หยุด observe หลังแสดงแล้ว (ไม่ต้องตรวจซ้ำ)
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,                   // แสดงเมื่อ element โผล่มา 10%
        rootMargin: '0px 0px -40px 0px',  // เริ่มนับก่อนถึง viewport เล็กน้อย
      }
    );

    // กำหนด stagger delay ให้แต่ละ element ตาม index
    animatables.forEach(function (el, i) {
      el.dataset.delay = i * 120;   // 0ms, 120ms, 240ms, ...
      scrollObserver.observe(el);
    });
  }

  /* ----------------------------------------------------------
     3. HEADER SCROLL EFFECT
     เพิ่ม class 'scrolled' เมื่อ scroll เกิน 80px
     CSS จะเพิ่ม box-shadow ให้ header ดูลอยขึ้น
     ---------------------------------------------------------- */
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true }); // passive: true ทำให้ scroll เร็วขึ้น
  }

  /* ----------------------------------------------------------
     4. HERO PARALLAX EFFECT
     Background ของ hero section เลื่อนช้ากว่า scroll 30%
     ทำให้รู้สึก layered และมีความลึก
     ---------------------------------------------------------- */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      // เลื่อน background ตาม scroll * 0.3 (เบากว่า scroll จริง)
      heroSection.style.backgroundPositionY =
        'calc(center + ' + (scrolled * 0.3) + 'px)';
    }, { passive: true });
  }

});
