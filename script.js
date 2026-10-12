/* ===================================================================
   PORTOFOLIO DIGITAL MULTIMEDIA CONTENT CREATOR - ALFINANISA FAZA CHOLIQ
   Vanilla JavaScript: Mobile Drawer, Smooth Scroll, Modals, Form
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC FOOTER YEAR
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. NAVBAR SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. MOBILE DRAWER NAVIGATION
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link, .close-drawer-action');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Cegah background scrolling
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // 5. PROJECT DETAILS DATA & MODAL SYSTEM
  const projectDetails = {
    'project-1': {
      title: 'Visual Novel "Asal Usul Tradisi Nyadran di Desa Ketingan"',
      content: `
        <h4>1. Ringkasan Proyek</h4>
        <p>Proyek media interaktif bertema kearifan lokal yang mengemas tradisi Nyadran di Desa Ketingan ke dalam format visual novel interaktif. Menggabungkan unsur penceritaan budaya, ilustrasi visual orisinal, tombol interaksi pilihan alur, dan mini games edukatif.</p>

        <h4>2. Masalah yang Diselesaikan</h4>
        <p>Menyampaikan cerita tradisi lokal agar tetap menarik, interaktif, dan mudah dipahami oleh generasi muda tanpa terasa monoton seperti membaca teks biasa.</p>

        <h4>3. Solusi</h4>
        <p>Mengonversi narasi cerita ke dalam visual novel interaktif dengan tombol percabangan dialog, 3 mini games selingan, serta tata musik latar dan efek audio yang membangun atmosfer khas pedesaan.</p>

        <h4>4. Fitur Utama</h4>
        <ul>
          <li>Navigasi percabangan dialog interaktif dengan tombol respon pilihan alur.</li>
          <li>3 mini games terintegrasi sebagai bagian alur permainan.</li>
          <li>Aset visual orisinal (karakter dan latar belakang suasana desa).</li>
          <li>Tata suara terpadu (BGM dan SFX) yang membangun atmosfer cerita.</li>
        </ul>

        <h4>5. Teknologi yang Digunakan</h4>
        <ul>
          <li><strong>Ren'Py:</strong> Game engine pembuatan visual novel dan scripting logika interaksi.</li>
          <li><strong>Visual Studio Code:</strong> Code editor untuk penulisan script logika dan integrasi mini games.</li>
        </ul>

        <h4>6. Kontribusi Saya</h4>
        <ul>
          <li>Membuat aset visual latar belakang (background) dan karakter.</li>
          <li>Menyusun baris kode (scripting) di Ren'Py untuk navigasi dan tombol interaktif.</li>
          <li>Mengintegrasikan serta menyempurnakan 3 mini games ke dalam alur cerita.</li>
          <li>Mencari, memilih, dan menyinkronkan musik latar (BGM) dan efek audio (SFX).</li>
        </ul>

        <h4>7. Proses Pengerjaan</h4>
        <p>Dimulai dari perancangan aset grafis karakter dan background, penulisan script interaksi percabangan cerita di Ren'Py menggunakan VS Code, integrasi mekanisme 3 mini games, hingga tahap kurasi audio dan pengujian alur interaktif.</p>

        <h4>8. Hasil & Tautan Langsung</h4>
        <p>Game visual novel interaktif yang fungsional dan dapat dimainkan langsung secara daring.</p>
        <p><em>Mainkan di platform itch.io:</em> <br>
          <a href="https://quachisun.itch.io/asal-usul-tradisi-nyadran-di-desa-ketingan" target="_blank" rel="noopener" style="color: #4e3c79; font-weight: 700; text-decoration: underline;">
            https://quachisun.itch.io/asal-usul-tradisi-nyadran-di-desa-ketingan
          </a>
        </p>
      `
    },
    'project-2': {
      title: 'Eksplorasi Desain Vektor "Supergraphic"',
      content: `
        <h4>1. Ringkasan Proyek</h4>
        <p>Eksplorasi perancangan desain grafis berbasis vektor yang mengolah bentuk geometris dasar menjadi kesatuan komposisi visual dinamis untuk elemen pendukung identitas visual.</p>

        <h4>2. Masalah yang Diselesaikan</h4>
        <p>Menciptakan komposisi visual yang dinamis, berani, namun tetap harmonis dan tidak monoton dengan batasan bentuk-bentuk geometris dasar.</p>

        <h4>3. Solusi</h4>
        <p>Menyusun perpotongan elemen lingkaran, setengah lingkaran, persegi, dan persegi panjang dengan mengaplikasikan palet warna gradasi kontras terukur (kuning, oranye, merah, merah muda, dan ungu).</p>

        <h4>4. Fitur Utama</h4>
        <ul>
          <li>Komposisi geometris saling berpotongan (intersection &amp; layering).</li>
          <li>Harmoni warna hangat-dingin yang seimbang dan dinamis.</li>
          <li>Grafis vektor resolusi bebas pecah (skalabel) untuk kebutuhan aplikasi cetak maupun digital.</li>
        </ul>

        <h4>5. Teknologi yang Digunakan</h4>
        <ul>
          <li><strong>Inkscape:</strong> Peranti lunak pengolah grafik vektor untuk pembentukan dan pewarnaan elemen geometris.</li>
        </ul>

        <h4>6. Kontribusi Saya (Tugas Mandiri)</h4>
        <ul>
          <li>Perancangan konsep bentuk geometris.</li>
          <li>Penyusunan tata letak (layout) dan perpotongan antar elemen visual.</li>
          <li>Harmonisasi dan pemilihan kombinasi palet warna.</li>
        </ul>

        <h4>7. Hasil</h4>
        <p>Tiga (3) variasi karya supergraphic vektor orisinal yang dinamis dan siap diaplikasikan sebagai elemen pendukung identitas visual.</p>
      `
    },
    'project-3': {
      title: 'Aset Visual Animasi 2D "Kolaborasi Tanpa Batas"',
      content: `
        <h4>1. Ringkasan Proyek</h4>
        <p>Pembuatan materi aset visual grafis berbasis vektor sebagai materi utama kebutuhan produksi pada proyek animasi 2D bertema "Kolaborasi Tanpa Batas".</p>

        <h4>2. Masalah yang Diselesaikan</h4>
        <p>Menyediakan materi visual yang rapi, berformat vektor terstruktur, dan selaras dengan art style tim produksi animasi 2D.</p>

        <h4>3. Solusi</h4>
        <p>Menggambar dan mengekspor 3 aset visual berbasis vektor dengan pemisahan layer objek yang siap diproses ke tahap penganimasian.</p>

        <h4>4. Fitur Utama</h4>
        <ul>
          <li>Tiga (3) aset visual orisinal berbasis vektor.</li>
          <li>Struktur aset yang rapi untuk mempermudah pipeline penganimasian 2D.</li>
        </ul>

        <h4>5. Teknologi yang Digunakan</h4>
        <ul>
          <li><strong>Inkscape:</strong> Menggambar dan mengekspor aset grafis berbasis vektor.</li>
        </ul>

        <h4>6. Kontribusi Saya</h4>
        <ul>
          <li>Menggambar dan mengolah 3 aset visual berbasis vektor sesuai arahan konsep animasi.</li>
        </ul>

        <h4>7. Hasil</h4>
        <p>Tiga aset visual vektor yang digunakan langsung dalam kebutuhan produksi animasi 2D.</p>
      `
    }
  };

  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterActions = document.getElementById('modal-footer-actions');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalContent.innerHTML = data.content;

    // Custom footer action per project
    if (projectId === 'project-1') {
      modalFooterActions.innerHTML = `
        <a href="https://quachisun.itch.io/asal-usul-tradisi-nyadran-di-desa-ketingan" target="_blank" rel="noopener" class="btn btn-accent btn-sm">
          <i class="fa-solid fa-gamepad"></i> Mainkan di itch.io
        </a>
        <button class="btn btn-outline btn-sm" id="modal-close-footer-btn">Tutup</button>
      `;
    } else {
      modalFooterActions.innerHTML = `
        <button class="btn btn-outline btn-sm" id="modal-close-footer-btn">Tutup</button>
      `;
    }

    const currentCloseFooterBtn = document.getElementById('modal-close-footer-btn');
    if (currentCloseFooterBtn) {
      currentCloseFooterBtn.addEventListener('click', closeProjectModal);
    }

    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // 6. CONTACT FORM SIMULATION
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;

    formFeedback.className = 'form-note';
    formFeedback.textContent = '';

    try {
      const response = await fetch(
        'https://formspree.io/f/mkjozydk',
        {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            Accept: 'application/json'
          }
        }
      );

      if (response.ok) {
        formFeedback.className = 'form-note success';
        formFeedback.textContent =
          'Terima kasih! Pesan berhasil dikirim.';

        contactForm.reset();
      } else {
        formFeedback.className = 'form-note error';
        formFeedback.textContent =
          'Pesan belum berhasil dikirim. Silakan coba lagi.';
      }
    } catch (error) {
      formFeedback.className = 'form-note error';
      formFeedback.textContent =
        'Terjadi kendala koneksi. Silakan coba lagi.';
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }

    setTimeout(() => {
      formFeedback.textContent = '';
      formFeedback.className = 'form-note';
    }, 5000);
  });
}
