import Header from './components/header/Header';
import Window from './components/window/Window';
import Block from './components/block/Block';
import Rectangle from './components/rectangle/Rectangle';
import { window } from './components/data/data';

import "./page.scss";

export default function Home() {

  const windowSecond = Object.assign({}, window);
  windowSecond.height = '210px';
  windowSecond.top = '200px';
  windowSecond.arrow = '/Group_3.png';
  windowSecond.path = 'Vector.png';
  windowSecond.border = '1px solid #01457A';
  windowSecond.radius = '50%';
  windowSecond.text = 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение';
  windowSecond.spantext = 'случится в течение...';
  windowSecond.imgbtn = '/Group117.png';
  windowSecond.link = 'frame29';

  const arr = [
    {
      id: 1,
      height: '76px',
      title: 'Ингаляционный антихолинергик',
      description: 'Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1'
    },
    {
      id: 2,
      height: '76px',
      title: 'Ингаляционный β2-агонист',
      description: 'Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции'
    },
    {
      id: 3,
      height: '114px',
      title: 'Ингаляционный глюкокортикостероид (ИГКС)',
      description: 'Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей'
    },
  ]
  return (
    <div className="content">
      <div className="vectors">
        <img className="vector45" src="/vector45.png" alt="vector image" />
        <img className="vector46" src="/vector46.png" alt="vector image" />
        <img className="vector47" src="/vector47.png" alt="vector image" />
      </div>

      <main className="main">
        <section >
          <Header title={'ХОБЛ: мифы и реальность'} />
          <Window window={window} />
          <Window window={windowSecond} />
        </section>

        <section style={{ paddingTop: '100px' }}>
          <Header title={'Терапия ХОБЛ: что в фокусе?'} />
          <div className='title'>
            <h1>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h1>
          </div>

          <div className='lower-item'>
            <header>
              <p>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:</p>
            </header>

            <div className='blocks' style={{
              position: 'relative',
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
            }}>
              {
                arr.map(item => {
                  return <Block title={item.title} description={item.description} id={item.id} />
                })
              }
              <Rectangle left={'250px'} trLeft={'210px'} />
              <Rectangle left={'750px'} trLeft={'150px'} />
            </div>
          </div>

          <div className='lower-block' style={{ margin: '110px 45px' }}>
            <div style={{
              display: 'inline-block',
              width: '630px',
              height: '400px',
              borderRadius: '20px',
              padding: '30px 0 30px 0',
              background: 'linear-gradient(90deg, #FBFDFF 0%, #D8EFFF 100.86%)',
              marginRight: '30px',
              marginTop: '100px'
            }}>

              <p style={{
                fontFamily: 'Noto Sans',
                fontWeight: '400', fontSize: '24px',
                lineHeight: '33px',
                color: '#01457A',
                marginTop: '30px',
                marginBottom: '106px',
                margin: '0 40px'

              }}>
                Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
                Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и
                длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и
                усиливает друг друга.
              </p>
            </div>

            <div style={{
              display: 'inline-block',
              width: '630px',
              height: '400px',
              borderRadius: '20px',
              padding: '30px 0 30px 0',
              background: 'linear-gradient(90deg, #FBFDFF 0%, #D8EFFF 100.86%)',
            }}>

              <p style={{
                fontFamily: 'Noto Sans',
                fontWeight: '400', fontSize: '24px',
                lineHeight: '33px',
                color: '#01457A',
                marginTop: '30px',
                marginBottom: '106px',
                margin: '0 40px'

              }}>
                Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
                Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и
                длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и
                усиливает друг друга.
              </p>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
