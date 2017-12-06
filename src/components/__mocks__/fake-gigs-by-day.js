export const fakeGigsByDay = [
  {
    'day': 'Lunes, 18 de Septiembre',
    'gigs': [
      {
        'id': '123456',
        'title': 'Anarchy in the JS',
        'lat_lng': '41.641851935961654,-0.8751129897638315',
        'address': 'BCN',
        'description': 'Coding Stones GigRow',
        'price': '',
        'image_url': 'http://www.zaragoza.es/cont/paginas/actividades/imagen/web_320x480px.png',
        'affiliate_url': null,
        'place': 'SCBCN',
        'slug': 'stones',
        'schedule_id': 5280,
        'hour': '19:30',
        'day': '2017-09-18',
        'schedule': [
          {
            'id': 5280,
            'day': '2017-09-18',
            'hour': '19:30',
            'gig_id': 5927,
            'created_at': '2017-09-07T15:57:35.419Z',
            'updated_at': '2017-09-07T15:57:35.419Z'
          }
        ]
      },
      {
        'id': '2222222',
        'title': 'Anarchy in the Codemotion',
        'lat_lng': '41.641851935961654,-0.8751129897638315',
        'address': 'BCN',
        'description': 'Another Coding Stones GigRow',
        'price': '',
        'image_url': 'http://www.wtf.es/wtf.png',
        'affiliate_url': null,
        'place': 'Around the world',
        'slug': 'stones',
        'schedule_id': 5280,
        'hour': '19:30',
        'day': '2017-12-03',
        'schedule': [
          {
            'id': 5280,
            'day': '2017-09-18',
            'hour': '19:30',
            'gig_id': 5927,
            'created_at': '2017-09-07T15:57:35.419Z',
            'updated_at': '2017-09-07T15:57:35.419Z'
          }
        ]
      },
    ]
  }
]

export const FIRST_DAY_GIG_TEXTS = fakeGigsByDay[0].gigs.map(gig => gig.title)
export const FIRST_GIG = fakeGigsByDay[0].gigs[0]
