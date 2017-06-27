import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResponseOptions } from '@angular/http';
import { Category } from '../app/products/models/category';

export class InMemoryPlantsDbService implements InMemoryDbService {
  categories: Category[];

  constructor() {
    this.categories = [
      {
        'id': 0,
        'name': 'Balkonnövények',
        'plantsCount': 3
      },
      {
        'id': 1,
        'name': 'Rózsák',
        'plantsCount': 4
      },
      {
        'id': 2,
        'name': 'Bogyós gyülömcsök',
        'plantsCount': 5
      },
      {
        'id': 3,
        'name': 'Kúszónövények',
        'plantsCount': 4
      },
      {
        'id': 4,
        'name': 'Gyógyhatású növények',
        'plantsCount': 2
      }
    ];
  }
  createDb() {
    const login = [];
    const register = [];
    const categories = this.categories;
    const plants = [
      {
        'name': 'Estrella White',
        'price': 2650,
        'id': 0,
        'categoryId': 0,
        'isFrostProof': false,
        'lightReq': 'HALF_SHADY',
        'description': 'Virágait erős szárakon a lomb felett hozza. Bőséges virágzás egészen őszig. Az extrém időjárási ' +
        'viszonyokat is jól bírja, hajtásait a szél sem töri meg. A bőséges virágzáshoz elengedhetetlen a gyakori öntözés ' +
        'és tápoldatozás. Az általunk ajánlott „Muskátli virágvarázs” kitűnően megfelel erre a célra.',
        'plantingTime': ['APRIL', 'MAY', 'JUNE'],
        'waterReq': 'HIGH',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/100839_jpg_137965_406_488.jpg'
      },
      {
        'name': 'Álló muskátli',
        'price': 1470,
        'id': 1,
        'categoryId': 0,
        'isFrostProof': false,
        'lightReq': 'SUNNY',
        'description': 'Minden évben újabb fajták érkeznek. A legszebb virágú és legjobb fajtákat válogattam össze ' +
        'Önnek! Gazdagon virágoznak, nagyok a viráglabdák, szél- és időjárásállóak. Talán ezek a legfontosabb ' +
        'tulajdonságok. Bizonyára elégedett lesz a képen látható fajtákkal.',
        'plantingTime': ['APRIL', 'MAY', 'JUNE'],
        'waterReq': 'HIGH',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/100164_jpg_70579_406_488.jpg'
      },
      {
        'name': 'Csüngő begónia',
        'price': 1390,
        'id': 2,
        'categoryId': 0,
        'isFrostProof': false,
        'lightReq': 'SUNNY',
        'description': 'Újdonság, ami nem olcsó, de annál értékesebb! Barátai irigyelni fogják a rengeteg virágért. ' +
        'A 10 centiméteresre is megnövő fénylő virágok finom illatosak. Nem kell már az árnyékban sem nélkülöznie ' +
        'a bőséges virágzást! Ilyen helyekre a begóniák ültetése a legjobb választás. Egészen őszig messziről fénylenek ' +
        'virágai. Jó minőségű balkon virágföldet és rendszeres öntözést kíván.',
        'plantingTime': ['APRIL', 'MAY', 'JUNE'],
        'waterReq': 'HIGH',
        'nutritionReq': 'WEEKLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/100696_jpg_84843_406_488.jpg'
      },
      {
        'name': 'Tearózsa',
        'price': 1390,
        'id': 3,
        'categoryId': 1,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Virágait erős szárakon a lomb felett hozza. Bőséges virágzás egészen őszig. Az extrém időjárási ' +
        'viszonyokat is jól bírja, hajtásait a szél sem töri meg. A bőséges virágzáshoz elengedhetetlen a gyakori öntözés ' +
        'és tápoldatozás. Az általunk ajánlott „Muskátli virágvarázs” kitűnően megfelel erre a célra.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'MONTHLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/100839_jpg_137965_406_488.jpg'
      },
      {
        'name': 'Bokorrózsa Emilia Maria',
        'price': 1590,
        'id': 4,
        'categoryId': 1,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Egy nagyon gazdagon és szinte folyamatosan virágzó bokorrózsa. Pinkszínű, tömvetelt virágai ' +
        'csodálatos,graepfruit,iris és ibolya keverékére emlékeztető illatúak. Kisebb rácson felvezetve magasabbra is nevelhető. ',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/115150_jpg_56050_406_488.jpg'
      },
      {
        'name': 'Ágyásrózsa Julia Child',
        'price': 1590,
        'id': 5,
        'categoryId': 1,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'Ágyásrózsa. Egy száron több virágot is hoz, amik akár 12 cm nagyságúak, erős, aranysárga színűek. ' +
        'Legértékesebb csodálatos illata, különösen reggel mikor az első napsugarak felmelegítik a virágokat.' +
        'Ez a fajta nem hiányozhat egyetlen rózsakertből sem!',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'OCT', 'NOV'],
        'waterReq': 'LOW',
        'nutritionReq': 'WEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/119100_jpg_37607_406_488.jpg'
      },
      {
        'name': 'Művészrózsa Maurice Utrillo',
        'price': 1890,
        'id': 6,
        'categoryId': 1,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'Tűzpiros virágai fehéren csíkozottak. Mindehhez elragadó illat párosul.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/110840_jpg_91884_406_488.jpg'
      },
      {
        'name': 'Delikatess csüngőeper',
        'price': 1380,
        'id': 6,
        'categoryId': 2,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Kert nélkül is folyamatosan szedheti a finom epreket! Használjon jó minőségű földet, megfelelő ' +
        'méretű virágládát. Gondoskodjon a felesleges víz elvezetéséről! Napi rendszerességgel végzett öntözés és a ' +
        'megfelelő tápanyagutánpótlás mellett rövid időn belül megjelennek az első termések.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'JUNE'],
        'waterReq': 'HIGH',
        'nutritionReq': 'WEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/090060_jpg_535663_406_488.jpg'
      },
      {
        'name': 'Málna Boheme',
        'price': 1090,
        'id': 7,
        'categoryId': 2,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Egy őszi érésű málna, amilyenre az ember vágyik. Szép színű, kellemes illatú, csodálatos ízű.' +
        ' Bogyói nagyon korán érnek. Felálló és kompakt növekedésű.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'NONE',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/151330_jpg_131481_406_488.jpg'
      },
      {
        'name': 'Málna Golden Everest',
        'price': 1290,
        'id': 8,
        'categoryId': 2,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'A sárga termések teszik értékessé ezt a fajtát, mely különleges aromájával kiváló lekvárok, ' +
        'édességek és gyümölcslé készítéséhez. Terméseit június közepén a második éves vesszők végén hozza.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'NONE',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/151240_jpg_273492_406_488.jpg'
      },
      {
        'name': 'Hortblue Petite áfonya',
        'price': 1990,
        'id': 9,
        'categoryId': 2,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'Hosszabbítsa meg a szüretelési időt egy közkedvelt bogyós fajtával! Sokan kedvelik az áfonyát akár ' +
        'müzlibe, gyümölcssalátába vagy csak egyszerűen frissen a bokorról.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'NONE',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/154530_jpg_345266_406_488.jpg'
      },
      {
        'name': 'Vörös áfonya',
        'price': 1690,
        'id': 10,
        'categoryId': 2,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'Hosszabbítsa meg a szüretelési időt egy közkedvelt bogyós fajtával! Sokan kedvelik az áfonyát ' +
        'akár müzlibe, gyümölcssalátába vagy csak egyszerűen frissen a bokorról.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'JUNE', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'NONE',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/154520_jpg_402033_406_488.jpg'
      },
      {
        'name': 'Csokoládészőlő',
        'price': 1890,
        'id': 11,
        'categoryId': 3,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Kínában és Japánban a szárított kérgét gyógyszerként használják. Gyulladáscsökkentő és a ' +
        'menstruációs problémákat enyhítő hatása is ismert. Gyökere lázcsillapító hatású, termése egyes vélemények ' +
        'szerint hatásos a daganatos betegségekkel szemben.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'JUNE', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'LOW',
        'nutritionReq': 'MONTHLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/070535_jpg_51932_406_488.jpg'
      },
      {
        'name': 'Klemátisz ´Guernsey Cream´',
        'price': 2190,
        'id': 12,
        'categoryId': 3,
        'isFrostProof': false,
        'lightReq': 'HALF_SHADY',
        'description': 'Mint ahogy a neve is jelzi, az első krémszínű klemátisz! Különleges színű virágainak értékét egy ' +
        'sötét háttér még inkább kiemeli. A virág zöld közepe a sötétsárga porzókkal egyedülálló szépséget kölcsönöz ' +
        'a fajtának.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'LOW',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/070770_jpg_431988_406_488.jpg'
      },
      {
        'name': 'Klemátisz \'Innocent Blush\'',
        'price': 2990,
        'id': 13,
        'categoryId': 3,
        'isFrostProof': false,
        'lightReq': 'SUNNY',
        'description': 'Csodaszép, nosztalgikus, új nemesítésű fajta. A 2. éves hajtásokon fejlődnek ki nagy, telt virágai.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'SEPT', 'OCT'],
        'waterReq': 'MEDIUM',
        'nutritionReq': 'BIWEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/070735_jpg_228664_406_488.jpg'
      },
      {
        'name': 'Nyári lilaakác',
        'price': 2590,
        'id': 14,
        'categoryId': 3,
        'isFrostProof': true,
        'lightReq': 'SUNNY',
        'description': 'Június - júliusban nyíló, rózsaszín - lilás virágai akár a 35 cm nagyságot is elérhetik. ' +
        'Szereti a védett helyeket. Minél idősebb, annál szebb a virágzása. Edényben is nevelhető.',
        'plantingTime': ['MARCH', 'APRIL', 'MAY', 'SEPT', 'OCT', 'NOV'],
        'waterReq': 'LOW',
        'nutritionReq': 'MONTHLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/070820_jpg_611190_406_488.jpg'
      },
      {
        'name': 'Aloe Vera',
        'price': 1790,
        'id': 15,
        'categoryId': 4,
        'isFrostProof': false,
        'lightReq': 'SUNNY',
        'description': 'Az Aloe vera az egyik legrégebbi gyógynövény a különféle külső és belső bajok gyógyítására. ' +
        'Enyhíti a fájdalmat, segíti a sebek, sérülések gyorsabb gyógyulását. Vágjon le egy darab levelet, majd a ' +
        'kipréselt levet kenje a sebre! A vaskos levelekből koktélok, italok is készülhetnek.',
        'plantingTime': ['APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT'],
        'waterReq': 'HIGH',
        'nutritionReq': 'WEEKLY',
        'isFavorite': true,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/102440_jpg_83473_406_488.jpg'
      },
      {
        'name': 'Homoktövis pár',
        'price': 4150,
        'id': 17,
        'categoryId': 4,
        'isFrostProof': true,
        'lightReq': 'HALF_SHADY',
        'description': 'Tudta Ön, hogy a homoktövis 10 - szer több C - vitamint tartalmaz mint a citrusfélék? ' +
        'Egy igazi bomba az immunrendszernek, és egy hatásos fegyver a megfázások ellen.',
        'plantingTime': ['APRIL', 'MAY', 'SEPT'],
        'waterReq': 'HIGH',
        'nutritionReq': 'MONTHLY',
        'isFavorite': false,
        'imageUrl': 'https://www.starkl.hu/img/eshop/thumbnails/130583_jpg_109750_406_488.jpg'
      }
    ];

    return {login, register, categories, plants};
  }

  responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo) {
    if (requestInfo.resourceUrl.includes('login') || requestInfo.resourceUrl.includes('register')) {
      responseOptions.body = {token: 'asdasd'};
      responseOptions.status = 200;
    } else if (typeof responseOptions.body === 'object') {
      responseOptions.body = responseOptions.body ? (responseOptions.body as any).data : null;
    }
    if (requestInfo.resourceUrl.includes('categories') && requestInfo.req.url.includes('?')) {
      const result = this.categories.slice(Math.random() * 4);
      responseOptions.body = result;
    }

    return responseOptions;
  }

}
