import './frame29.scss';

export default function Frame(props: any) {

    const arr = [
        {
            src: '/Vector1.png',
            percent: '45,5%',
            title: 'пациентов с сердечной недостаточностью',
            about: 'Популяционное когортное исследование (N=385)'
        },
        {
            src: '/Vector2.svg',
            percent: '53,3%',
            title: 'пациентов с инфарктом миокарда',
            about: 'Апостериорный анализ когортного исследования (N=2887)'
        },
        {
            src: '/Vector3.png',
            percent: '50,5%',
            title: 'пациентов с раком мочевого пузыря',
            about: 'Исследование Национальной статистической службы (N=42642)'
        },
    ]

    return (
        <div className="frame">
            <p className='text-first'>
                Большинство пациентов с ХОБЛ столкнется с обострениями:
                как минимум одно среднетяжелое или тяжелое обострение случится
                в течение 3 лет у 77% пациентов1.
            </p>
            <p className='text-second'>
                В течение 5 лет после первого тяжёлого обострения в живых остаются
                только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым
                при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
            </p>

            <div className='header'>
                <h2>Пятилетняя выживаемость пациентов</h2>
            </div>

            <div className='image'>
                {
                    arr.map(item => {
                        return <div className='image-block'>
                            <div className='img'>
                                <img src={item.src} alt='image' />
                            </div>
                            <h1>{item.percent}</h1>
                            <div className='title'>{item.title}</div>
                            <p>{item.about}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}