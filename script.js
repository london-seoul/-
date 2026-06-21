/* ============================================================
   LONDON TRAVEL ITINERARY — Data & Interactive Logic
   슬라이드 이미지: PPT → PNG 내보내기 (slides/ 폴더)
   사진: Wikimedia Commons (CC 라이선스)
   ============================================================ */

const DAYS = [

  /* ─────────────────── DAY 01 ─────────────────── */
  {
    id: 'day01', label: 'DAY 01',
    parts: [{
      places: [
        { num:'01', name:'Regent Street',    tag:'필수',
          desc:'Oxford Circus역에서 Piccadilly Circus까지 도보 약 1km. 상점가 거리가 예쁩니다.',
          photos: PHOTOS['Regent Street'] },
        { num:'02', name:'Liberty 백화점',   tag:'필수',
          desc:'148년 된 백화점. 튜더 양식 건물 내외관이 특이합니다.',
          photos: PHOTOS['Liberty 백화점'] },
        { num:'03', name:'Carnaby Street',   tag:'선택',
          desc:'리버티 백화점 뒤편, 소호 안에서도 가장 예쁜 거리. 젊은이들이 많이 모입니다.',
          photos: PHOTOS['Carnaby Street'] },
        { num:'04', name:'Piccadilly Circus',tag:'필수',
          desc:'런던에서 제일 오래된 전광판. 현대차 광고도 메인으로 송출됩니다.',
          photos: PHOTOS['Piccadilly Circus'] },
        { num:'05', name:'Fortnum & Mason', tag:'선택',
          desc:'300년 된 영국 최고(最古) 티 샵. 기념품 추천 — 해로즈에서 사도 무방.',
          photos: PHOTOS['Fortnum & Mason'] },
        { num:'06', name:'Bancone Soho',    tag:'식사',
          desc:'미슐랭 선정 파스타집 (Golden Sq). 가격도 저렴합니다. 미리 예약 추천.',
          photos: PHOTOS['Bancone Soho'] },
        { num:'07', name:'뮤지컬 관람',     tag:'뮤지컬',
          desc:'저녁 · 필수 · 예약 필요. West End 공연가에서 런던의 밤을 뮤지컬로 마무리.',
          photos: PHOTOS['뮤지컬 관람'] },
      ]
    }]
  },

  /* ─────────────────── DAY 02 ─────────────────── */
  {
    id: 'day02', label: 'DAY 02',
    parts: [{
      places: [
        { num:'01', name:'Buckingham Palace',       tag:'필수',
          desc:'근위병 교대식 11시·3시 (격일). 시간 확인 후 방문, 입장 티켓 미리 구매 권장.',
          photos: PHOTOS['Buckingham Palace'] },
        { num:'02', name:'Trafalgar / 내셔널갤러리',tag:'필수',
          desc:'런던 최대 광장 + 무료 내셔널 갤러리. 미리 예약하면 빠른 입장 가능합니다.',
          photos: PHOTOS['Trafalgar / 내셔널갤러리'] },
        { num:'03', name:'Cecil Court',             tag:'필수',
          desc:'고서적·옛 우표·엽서를 파는 작고 예쁜 골목. 해리포터 다이애건 앨리 모티프입니다.',
          photos: PHOTOS['Cecil Court'] },
        { num:'04', name:'M&M / Lego Store',        tag:'필수',
          desc:'레스터 스퀘어의 M&M 월드 + 레고 스토어. 자녀 동반 시 추천합니다.',
          photos: PHOTOS['M&M / Lego Store'] },
        { num:'05', name:'Chinatown',               tag:'필수',
          desc:'영국에서 제일 큰 차이나타운. 붉은 게이트와 먹거리가 많은 거리입니다.',
          photos: PHOTOS['Chinatown'] },
        { num:'06', name:'Lanzhou Lamian',          tag:'식사',
          desc:'도삭우육면 맛집. dao xiao mian + stewed beef soup 추천합니다.',
          photos: PHOTOS['Lanzhou Lamian'] },
        { num:'07', name:'Covent Garden',           tag:'필수',
          desc:'의류·수공예·앤틱 상점과 식당이 모인 아케이드. 거리 공연도 자주 합니다.',
          photos: PHOTOS['Covent Garden'] },
        { num:'08', name:"Neal's Yard",             tag:'선택',
          desc:'코벤트 가든 근처 알록달록한 작은 골목. 사진 맛집이 많습니다.',
          photos: PHOTOS["Neal's Yard"] },
        { num:'09', name:'Somerset House',          tag:'선택',
          desc:'러브 액츄얼리 스케이트장의 대저택. 여행 주간엔 여름 음악 페스티벌 개최.(예약 필요)',
          photos: PHOTOS['Somerset House'] },
      ]
    }]
  },

  /* ─────────────────── DAY 03 ─────────────────── */
  {
    id: 'day03', label: 'DAY 03',
    parts: [
      {
        places: [
          { num:'01', name:'British Museum', tag:'필수',
            desc:'세계 최대 박물관 중 하나. 워낙 커서 마이리얼트립 가이드 투어(2.5시간) 추천. 홈페이지 예약 필수.',
            photos: PHOTOS['British Museum'] },
          { num:'02', name:'Fish Plaice',    tag:'식사',
            desc:'대영박물관 앞 평점 높은 피시앤칩스. 한국식 후라이드 치킨 조합도 인기.',
            photos: PHOTOS['Fish Plaice'] },
          { num:'03', name:'Kiltane',        tag:'선택',
            desc:'식당 앞 캐시미어 목도리 가게. 기념품으로 인기. 해외연수 때 가이드가 데려와 다들 사간 곳.',
            photos: PHOTOS['Kiltane'] },
          { num:'04', name:'UCL 런던대학',   tag:'선택',
            desc:'대영박물관 뒤편의 런던대학. 캠퍼스가 비교적 큼. 고든 스퀘어 정원도 예쁩니다.',
            photos: PHOTOS['UCL 런던대학'] },
        ]
      },
      {
        places: [
          { num:'05', name:"St Paul's Cathedral", tag:'필수',
            desc:'입장료 내고 옥상(돔)까지 추천 — 뷰가 좋습니다. 8:30 오픈.',
            photos: PHOTOS["St Paul's Cathedral"] },
          { num:'06', name:'Leadenhall Market',   tag:'선택',
            desc:'해리포터 1편 다이애건 앨리 촬영지. 빅토리아풍 아케이드입니다.',
            photos: PHOTOS['Leadenhall Market'] },
          { num:'07', name:'Tate Modern',         tag:'필수',
            desc:'현대차가 후원하는 현대미술관. 예약 불필요, 2시간이면 충분. 10:00 오픈.',
            photos: PHOTOS['Tate Modern'] },
          { num:'08', name:"Shakespeare's Globe", tag:'선택',
            desc:'셰익스피어 연극을 공연하던 극장. 테이트 모던 바로 앞입니다.',
            photos: PHOTOS["Shakespeare's Globe"] },
          { num:'09', name:'Borough Market',      tag:'필수',
            desc:'11세기부터 이어진 시장. 다양한 길거리 음식이 있습니다. 5시 종료.',
            photos: PHOTOS['Borough Market'] },
          { num:'10', name:'Tower Bridge',        tag:'필수',
            desc:'영국의 상징. 위에는 굳이 안 올라가도 무방 — 야경이 예쁘니 밤에 가는 걸 추천합니다.',
            photos: PHOTOS['Tower Bridge'] },
          { num:'11', name:'Tower of London',     tag:'선택',
            desc:'타워브릿지 북쪽의 성. 왕실 거주지·감옥으로 쓰임. 유네스코 세계문화유산.',
            photos: PHOTOS['Tower of London'] },
        ]
      }
    ]
  },

  /* ─────────────────── DAY 04 ─────────────────── */
  {
    id: 'day04', label: 'DAY 04',
    parts: [
      {
        places: [
          { num:'01', name:'Hyde Park',        tag:'필수',
            desc:'영국식 공원 문화의 정수 — 산책과 피크닉을 즐기기 좋은 런던 도심의 대형 공원. 서펜타인 호수가 중심.',
            photos: PHOTOS['Hyde Park'] },
          { num:'02', name:'Harrods 백화점',   tag:'선택',
            desc:'런던에서 제일 오래된 백화점. 지하 식당가의 차(tea)는 기념품으로 가격이 나쁘지 않습니다.',
            photos: PHOTOS['Harrods 백화점'] },
          { num:'03', name:'Royal Albert Hall',tag:'선택',
            desc:'영국에서 가장 유명한 공연장. 외관이 멋있어서 앞에서 사진만 찍어도 좋습니다.',
            photos: PHOTOS['Royal Albert Hall'] },
        ]
      },
      {
        places: [
          { num:'04', name:'Notting Hill',        tag:'필수',
            desc:'토요일에 모든 상점이 여는 마켓 (일요일 휴무). 영화 노팅힐의 서점과 골동품 가게 구경.',
            photos: PHOTOS['Notting Hill'] },
          { num:'05', name:'Sherlock + Daunt 서점',tag:'선택',
            desc:'셜록 홈즈 박물관은 드라마 팬에게, Daunt 서점은 특이한 인테리어 + 에코백이 인기입니다.',
            photos: PHOTOS['Sherlock + Daunt 서점'] },
          { num:'06', name:'Abbey Road',          tag:'선택',
            desc:'비틀즈 앨범 커버의 그 횡단보도. 사진 찍으러 들르는 명소입니다.',
            photos: PHOTOS['Abbey Road'] },
          { num:'07', name:'Primrose Hill',        tag:'필수',
            desc:'관광객은 잘 모르지만 현지에서 손꼽는 노을 명소. 핑크빛 하늘과 런던 전경을 볼 수 있습니다.',
            photos: PHOTOS['Primrose Hill'] },
        ]
      }
    ]
  },

  /* ─────────────────── DAY 05 ─────────────────── */
  {
    id: 'day05', label: 'DAY 05',
    parts: [{
      places: [
        { num:'01', name:'빅벤 & 국회의사당', tag:'필수',
          desc:'영국 정치의 심장부. 빅벤(엘리자베스 타워)과 웨스트민스터 궁전. 외관 무료, 내부는 사전 예약 필요.',
          photos: PHOTOS['빅벤 & 국회의사당'] },
        { num:'02', name:'웨스트민스터 애비', tag:'필수',
          desc:'영국 역대 왕의 대관식과 장례가 치러진 고딕 성당. 1066년부터 이어온 역사. 유료 입장.',
          photos: PHOTOS['웨스트민스터 애비'] },
        { num:'03', name:'처칠 워룸',        tag:'필수',
          desc:'2차 세계대전 당시 처칠이 사용하던 지하 벙커. 역사에 관심 있다면 강력 추천. 유료 입장.',
          photos: PHOTOS['처칠 워룸'] },
        { num:'04', name:'다우닝 10번가',    tag:'선택',
          desc:'영국 총리 관저. 게이트 앞에서 사진 촬영 가능. 웨스트민스터 근처 도보 이동.',
          photos: PHOTOS['다우닝 10번가'] },
        { num:'05', name:'런던아이',          tag:'필수',
          desc:'템스강변의 대형 관람차. 날씨 좋은 날 런던 전망 최고. 사전 예약 필수.',
          photos: PHOTOS['런던아이'] },
        { num:'06', name:'베터시 발전소',    tag:'선택',
          desc:'핑크 플로이드 앨범 커버로 유명한 복합문화공간. 쇼핑과 식사를 즐기기 좋습니다.',
          photos: PHOTOS['베터시 발전소'] },
        { num:'07', name:'London River Bus', tag:'선택',
          desc:'베터시에서 타워브릿지까지 강을 따라 이동. 런던 전경을 한번 쫙 볼 수 있습니다. 인당 약 10파운드.',
          photos: PHOTOS['London River Bus'] },
      ]
    }]
  },

  /* ─────────────────── EXTRA ─────────────────── */
  {
    id: 'extra', label: 'EXTRA',
    isExtra: true,
    parts: [{
      places: [
        { num:'01', name:'옥스퍼드 / 코츠월드',    tag:'근교',
          desc:'대학 도시 옥스퍼드와 동화 같은 코츠월드 시골 마을. 기차/투어로 당일치기 가능.',
          photos: PHOTOS['옥스퍼드 / 코츠월드'] },
        { num:'02', name:'비스터 빌리지 아울렛', tag:'쇼핑',
          desc:'명품 아울렛. 런던에서 기차 1시간. 텍스 리펀까지 받으면 할인 폭이 큼.',
          photos: PHOTOS['비스터 빌리지 아울렛'] },
        { num:'03', name:'그리니치 천문대',       tag:'명소',
          desc:'본초자오선(경도 0도)이 지나는 천문대. 동쪽으로 조금 떨어져 있음.',
          photos: PHOTOS['그리니치 천문대'] },
        { num:'04', name:'자연사 박물관',         tag:'무료',
          desc:'공룡 화석과 웅장한 건물로 유명한 무료 박물관. 켄징턴, 해로즈 근처.',
          photos: PHOTOS['자연사 박물관'] },
      ]
    }]
  }
];

/* ============================================================
   SLIDE HOTSPOT CONFIG
   PPT 슬라이드 이미지 위에 투명 클릭 영역 정의.
   x, y, w, h: 슬라이드 이미지 폭/높이 대비 % (left/top/width/height)
   pi: getPlaces(day)의 flat index (all parts merged)
============================================================ */
const SLIDE_VIEWS = [
  // DAY 01 → slide01.png
  { slides: [
    { src:'slides/slide01.png', hotspots:[
      {x:26.93, y:51.68, w:20.37, h: 9.37, pi:0}, // Regent Street
      {x:64.19, y:51.68, w:20.37, h: 9.37, pi:1}, // Liberty
      {x:26.93, y:63.98, w:20.37, h: 9.37, pi:2}, // Carnaby Street
      {x:64.19, y:63.98, w:20.37, h: 9.37, pi:3}, // Piccadilly Circus
      {x:26.93, y:76.28, w:20.37, h: 9.37, pi:4}, // Fortnum & Mason
      {x:64.19, y:76.28, w:20.37, h: 9.37, pi:5}, // Bancone Soho
      {x:24.98, y:89.10, w:59.58, h: 4.05, pi:6}, // 뮤지컬
    ]}
  ]},

  // DAY 02 → slide02.png  (3-column grid)
  { slides: [
    { src:'slides/slide02.png', hotspots:[
      {x:15.12, y:50.78, w:20.37, h:12.75, pi:0}, // Buckingham Palace
      {x:39.82, y:50.78, w:20.37, h:12.75, pi:1}, // Trafalgar / 내셔널갤러리
      {x:64.52, y:50.78, w:20.37, h:12.75, pi:2}, // Cecil Court
      {x:15.12, y:66.23, w:20.37, h:12.75, pi:3}, // M&M / Lego
      {x:39.82, y:66.23, w:20.37, h:12.75, pi:4}, // Chinatown
      {x:64.52, y:66.23, w:20.37, h:12.75, pi:5}, // Lanzhou Lamian
      {x:15.12, y:81.68, w:20.37, h:12.75, pi:6}, // Covent Garden
      {x:39.82, y:81.68, w:20.37, h:12.75, pi:7}, // Neal's Yard
      {x:64.52, y:81.68, w:20.37, h:12.75, pi:8}, // Somerset House
    ]}
  ]},

  // DAY 03 → slide03.png (Part1 · Morning) + slide04.png (Part2 · Afternoon)
  { slides: [
    { src:'slides/slide03.png', hotspots:[
      {x:13.71, y:52.05, w:33.58, h:18.53, pi:0}, // British Museum  (icon + text)
      {x:50.76, y:52.05, w:33.80, h:18.53, pi:1}, // Fish Plaice     (icon + text)
      {x:13.71, y:74.10, w:33.58, h:18.53, pi:2}, // Kiltane         (icon + text)
      {x:50.76, y:74.10, w:33.80, h:18.53, pi:3}, // UCL 런던대학    (icon + text)
    ]},
    { src:'slides/slide04.png', hotspots:[
      {x:26.93, y:51.75, w:20.37, h: 9.30, pi:4},  // St Paul's
      {x:64.19, y:51.75, w:20.37, h: 9.30, pi:5},  // Leadenhall Market
      {x:26.93, y:64.05, w:20.37, h: 9.30, pi:6},  // Tate Modern
      {x:64.19, y:64.05, w:20.37, h: 9.30, pi:7},  // Shakespeare's Globe
      {x:26.93, y:76.35, w:20.37, h: 9.30, pi:8},  // Borough Market
      {x:64.19, y:76.35, w:20.37, h: 9.30, pi:10}, // Tower of London
      {x:24.98, y:89.10, w:59.58, h: 5.18, pi:9},  // Tower Bridge (full-width)
    ]}
  ]},

  // DAY 04 → slide05.png (Kensington) + slide06.png (Notting Hill)
  { slides: [
    { src:'slides/slide05.png', hotspots:[
      {x:13.71, y:52.50, w:70.64, h:10.65, pi:0}, // Hyde Park        (icon + text)
      {x:13.71, y:67.35, w:70.64, h:10.65, pi:1}, // Harrods          (icon + text)
      {x:13.71, y:82.20, w:70.64, h:10.65, pi:2}, // Royal Albert Hall (icon + text)
    ]},
    { src:'slides/slide06.png', hotspots:[
      {x:29.31, y:51.83, w:17.98, h:17.77, pi:3}, // Notting Hill
      {x:66.58, y:51.83, w:17.98, h:17.77, pi:4}, // Sherlock + Daunt
      {x:29.31, y:72.98, w:17.98, h:17.77, pi:5}, // Abbey Road
      {x:66.58, y:72.98, w:17.98, h:17.77, pi:6}, // Primrose Hill
    ]}
  ]},

  // DAY 05 → slide07.png (places) + slide08.png (route map)
  { slides: [
    { src:'slides/slide07.png', hotspots:[
      {x:28.55, y:52.13, w:18.74, h:11.40, pi:0}, // 빅벤 & 국회의사당
      {x:65.82, y:52.13, w:18.74, h:11.40, pi:1}, // 웨스트민스터 애비
      {x:28.55, y:66.83, w:18.74, h:11.40, pi:2}, // 처칠 워룸
      {x:65.82, y:66.83, w:18.74, h:11.40, pi:3}, // 다우닝 10번가
      {x:28.55, y:81.53, w:18.74, h: 7.57, pi:4}, // 런던아이
      {x:65.82, y:81.53, w:18.74, h: 7.57, pi:5}, // 베터시 발전소
      {x:24.98, y:89.10, w:59.58, h: 5.18, pi:6}, // London River Bus
    ]},
    { src:'slides/slide08.png', hotspots:[] }  // 루트 지도
  ]},

  // EXTRA → slide09.png (bonus spots only — shopping cards are visual-only)
  { slides: [
    { src:'slides/slide09.png', hotspots:[
      {x:13.71, y:25.95, w:33.58, h:11.78, pi:0}, // 옥스퍼드 / 코츠월드 (icon + text)
      {x:50.76, y:25.95, w:33.80, h:11.78, pi:1}, // 비스터 빌리지       (icon + text)
      {x:13.71, y:41.18, w:33.58, h:11.77, pi:2}, // 그리니치 천문대     (icon + text)
      {x:50.76, y:41.18, w:33.80, h:11.77, pi:3}, // 자연사 박물관       (icon + text)
    ]}
  ]},
];

/* ============================================================
   HELPERS
============================================================ */
function getPlaces(day) {
  return day.parts.flatMap(p => p.places);
}

/* ============================================================
   MODAL STATE
============================================================ */
let modalPhotos = [];
let modalIndex  = 0;

/* ============================================================
   RENDER TABS
============================================================ */
function renderTabs() {
  const nav = document.getElementById('dayTabs');
  DAYS.forEach(day => {
    const btn = document.createElement('button');
    btn.className   = 'tab-btn';
    btn.dataset.id  = day.id;
    btn.textContent = day.label;
    btn.addEventListener('click', () => activateDay(day.id));
    nav.appendChild(btn);
  });
}

/* ============================================================
   RENDER DAY — SLIDE VIEW
============================================================ */
function activateDay(dayId) {
  document.querySelectorAll('.tab-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.id === dayId));

  const dayIdx = DAYS.findIndex(d => d.id === dayId);
  const day    = DAYS[dayIdx];
  const places = getPlaces(day);
  const view   = SLIDE_VIEWS[dayIdx];
  const main   = document.getElementById('dayContent');
  main.innerHTML = '';

  /* Slide images with hotspot overlays */
  const container = document.createElement('div');
  container.className = 'slide-view-container';

  view.slides.forEach(slideData => {
    const wrap = document.createElement('div');
    wrap.className = 'slide-wrap';

    const img = document.createElement('img');
    img.src = slideData.src;
    img.alt = `${day.label} 슬라이드`;
    img.draggable = false;
    wrap.appendChild(img);

    slideData.hotspots.forEach(hs => {
      const place = places[hs.pi];
      if (!place) return;

      const spot = document.createElement('div');
      spot.className = 'hotspot';
      spot.style.left   = `${hs.x}%`;
      spot.style.top    = `${hs.y}%`;
      spot.style.width  = `${hs.w}%`;
      spot.style.height = `${hs.h}%`;
      spot.title = place.name; // native tooltip fallback

      const label = document.createElement('div');
      label.className = 'hotspot-label';
      label.textContent = place.name + ' — 사진 보기';
      spot.appendChild(label);

      spot.addEventListener('click', () => openModal(place));
      wrap.appendChild(spot);
    });

    container.appendChild(wrap);
  });

  main.appendChild(container);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   MODAL
============================================================ */
function openModal(place) {
  modalPhotos = place.photos;
  modalIndex  = 0;
  document.getElementById('modalName').textContent = place.name;
  document.getElementById('modalDesc').textContent = place.desc;
  document.getElementById('modalTagWrap').innerHTML =
    `<span class="card-tag tag-${place.tag}">${place.tag}</span>`;
  refreshPhoto();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function refreshPhoto() {
  const img = document.getElementById('modalImg');
  img.classList.add('loading');
  img.onload = img.onerror = () => img.classList.remove('loading');
  img.src = modalPhotos[modalIndex];
  const multi = modalPhotos.length > 1;
  document.getElementById('modalPrev').style.display    = multi ? 'flex' : 'none';
  document.getElementById('modalNext').style.display    = multi ? 'flex' : 'none';
  document.getElementById('modalCounter').textContent   =
    multi ? `${modalIndex + 1} / ${modalPhotos.length}` : '';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.getElementById('modalPrev').addEventListener('click', () => {
  modalIndex = (modalIndex - 1 + modalPhotos.length) % modalPhotos.length;
  refreshPhoto();
});
document.getElementById('modalNext').addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % modalPhotos.length;
  refreshPhoto();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('modalOverlay').classList.contains('open')) return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowLeft')  { modalIndex = (modalIndex - 1 + modalPhotos.length) % modalPhotos.length; refreshPhoto(); }
  if (e.key === 'ArrowRight') { modalIndex = (modalIndex + 1) % modalPhotos.length; refreshPhoto(); }
});

/* ============================================================
   INIT
============================================================ */
renderTabs();
activateDay('day01');
