/* ============================================================
   photos.js — 장소별 사진 URL 목록
   - 사진은 여러 장 추가 가능: ['URL1', 'URL2', 'URL3']
   - URL 순서대로 팝업에서 ← → 로 넘길 수 있습니다
   - 수정 후 브라우저 새로고침하면 바로 반영됩니다
   ============================================================ */

const PHOTOS = {

  /* ── DAY 01 · West End & Soho ─────────────────────────── */

  'Regent Street': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Regent_Street_2011-04-25.jpg/960px-Regent_Street_2011-04-25.jpg'
  ],

  'Liberty 백화점': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Liberty_department_store_London.jpg/960px-Liberty_department_store_London.jpg'
  ],

  'Carnaby Street': [
    'https://www.visitlondon.com/-/media/images/london/visit/things-to-do/shopping/carnaby/carnaby-street-daytime-1920x1080.png?mw=1280&rev=4eac19942c0246f2a47aa445099d43d2&hash=3E1C1D4159B5A0B1175DCF063FBCFE16'
  ],

  'Piccadilly Circus': [
    'https://daily.hankooki.com/news/photo/201906/20190602_1_bodyFimg_608191.jpg'
  ],

  'Fortnum & Mason': [
    'https://www.ulysses.travel/wp-content/uploads/2024/05/Fortnum-Mason-epicerie-1024x768.jpg'
  ],

  'Bancone Soho': [
    'https://www.thegoodfoodguide.co.uk/images/restaurant/10023412_1950322_Exterior1[xya:1360x680].jpg'
  ],

  '뮤지컬 관람': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/London_%2844761485915%29.jpg/960px-London_%2844761485915%29.jpg'
  ],

  /* ── DAY 02 · Royal London → Covent Garden ─────────────── */

  'Buckingham Palace': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg'
  ],

  'Trafalgar / 내셔널갤러리': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/960px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg'
  ],

  'Cecil Court': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/London_Cecil_Court.jpg/960px-London_Cecil_Court.jpg'
  ],

  'M&M / Lego Store': [
    'https://static.independent.co.uk/2024/09/20/11/shutterstock_1215217270.jpg'
  ],

  'Chinatown': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/London%2C_China_Town_--_2016_--_4868.jpg/960px-London%2C_China_Town_--_2016_--_4868.jpg'
  ],

  'Lanzhou Lamian': [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/ed/8c/91/caption.jpg?w=1100&h=-1&s=1'
  ],

  'Covent Garden': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg'
  ],

  "Neal's Yard": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg"
  ],

  'Somerset House': [
    'https://upload.wikimedia.org/wikipedia/commons/4/45/The_courtyard_of_Somerset_House%2C_Strand%2C_London_-_geograph.org.uk_-_1601172.jpg'
  ],

  /* ── DAY 03 · Bloomsbury + City → South Bank ───────────── */

  'British Museum': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/960px-British_Museum_%28aerial%29.jpg'
  ],

  'Fish Plaice': [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5ZDhV5DDYL_ToKAPCIwlmdz5BFXBCNoqFFuY1SBnQ2fk9uPtXzXo1GQ&s=10'
  ],

  'Kiltane': [
    'https://mblogthumb-phinf.pstatic.net/MjAyNDEyMDZfMjc1/MDAxNzMzNDczNjM5NzU2.qeTsiuvyBWK7dg0MRrwUyKQ3sLFrpzhRTF7jehfpoDIg.kCcoU3OqdunhWLV_sKvrGG42N_Bgrqp5GgzIxFREl08g.JPEG/SE-80003f25-0209-4ed9-babd-68fd3f4029b3.jpg?type=w800'
  ],

  'UCL 런던대학': [
    'https://www.london.ac.uk/sites/default/files/styles/uncropped_large/public/2026-04/UCL%20University%20College%20London%20-%20Federation%20member%20of%20University%20of%20London.jpg?itok=GZmsZv68'
  ],

  "St Paul's Cathedral": [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/St_Pauls_aerial_%28cropped%29.jpg/960px-St_Pauls_aerial_%28cropped%29.jpg'
  ],

  'Leadenhall Market': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg/960px-Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg'
  ],

  'Tate Modern': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tate_Modern_-_Bankside_Power_Station.jpg/960px-Tate_Modern_-_Bankside_Power_Station.jpg'
  ],

  "Shakespeare's Globe": [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Restaurante_The_Swan%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_113.jpg/960px-Restaurante_The_Swan%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_113.jpg'
  ],

  'Borough Market': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/London_2018_March_IMG_0663.jpg/960px-London_2018_March_IMG_0663.jpg'
  ],

  'Tower Bridge': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg'
  ],

  'Tower of London': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg'
  ],

  /* ── DAY 04 · Kensington + Notting Hill → North ────────── */

  'Hyde Park': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hyde_Park_London_from_the_air.jpg/960px-Hyde_Park_London_from_the_air.jpg'
  ],

  'Harrods 백화점': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Harrods_%28London%29.jpg/960px-Harrods_%28London%29.jpg'
  ],

  'Royal Albert Hall': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Royal_Albert_Hall%2C_London_-_Nov_2012.jpg/960px-Royal_Albert_Hall%2C_London_-_Nov_2012.jpg'
  ],

  'Notting Hill': [
    'https://previews.123rf.com/images/alzamu79/alzamu792005/alzamu79200503533/147260881-portobello-market-in-notting-hill-london-england-uk.jpg'
  ],

  'Sherlock + Daunt 서점': [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/48/bd/3c/photo1jpg.jpg?w=1200&h=-1&s=1'
  ],

  'Abbey Road': [
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Beatles_Abbey_Road_album_cover.jpg'
  ],

  'Primrose Hill': [
    'https://exploring-london.com/wp-content/uploads/2017/04/view-from-primrose-hill.jpg?w=605'
  ],

  /* ── DAY 05 · Westminster ──────────────────────────────── */

  '빅벤 & 국회의사당': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/960px-Elizabeth_Tower%2C_June_2022.jpg'
  ],

  '웨스트민스터 애비': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Westminster_Abbey%2C_Westminster.jpg/960px-Westminster_Abbey%2C_Westminster.jpg'
  ],

  '처칠 워룸': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/MapRoomCabinetWarRoomsTrim.jpg/960px-MapRoomCabinetWarRoomsTrim.jpg'
  ],

  '다우닝 10번가': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/10_Downing_Street._MOD_45155532.jpg/960px-10_Downing_Street._MOD_45155532.jpg'
  ],

  '런던아이': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG'
  ],

  '베터시 발전소': [
    'https://showcase-interiors.co.uk/wp-content/uploads/2024/08/240318_Genesis-Battersea_1050x700_01.jpg'
  ],

  'London River Bus': [
    'https://www.thamesclippers.com/media/edhdvzsp/uber_boat_by_thames_clippers_1_hero_only.jpg?rxy=0.44862155388471175,0.5985129604572336&width=1800&height=1164&format=jpg&quality=90&v=1dc5d7338b1c970'
  ],

  /* ── EXTRA · Bonus Spots ───────────────────────────────── */

  '옥스퍼드 / 코츠월드': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Museum_of_Oxford_%285652685943%29.jpg/960px-Museum_of_Oxford_%285652685943%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Castle_combe_cotswolds.jpg/960px-Castle_combe_cotswolds.jpg'
  ],

  '비스터 빌리지 아울렛': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bicester_Village_-_geograph.org.uk_-_1828514.jpg/960px-Bicester_Village_-_geograph.org.uk_-_1828514.jpg'
  ],

  '그리니치 천문대': [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/b3/cd/4f/royal-observatory-greenwich.jpg?w=1200&h=-1&s=1'
  ],

  '자연사 박물관': [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfC6izJGrNV4eWKAPf8OESPH4nrq3lnhvJr5vQjReDP6L5FaA5hXAuKSh&s=10'
  ],

};
