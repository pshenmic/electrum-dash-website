import Image from 'next/image'
import './Advantages.scss'
import './AdvantagesItem.scss'

function AdvantagesItem({title, description, imgSrc}) {
  return (
    <div className={'AdvantagesItem'}>
      <div className={'AdvantagesItem__ImgContainer'}>
        <Image className={'AdvantagesItem__Img'} alt={ title } src={ imgSrc } width={110} height={110} />
      </div>
      <div className={'AdvantagesItem__ContentContainer'}>
        <h2 className={'AdvantagesItem__Title'}>{ title }</h2>
        <p className={'AdvantagesItem__Description'}>{ description }</p>
      </div>
    </div>
  )
}

export default function Advantages() {
  return (
    <section className={'Advantages'}>
      <div className={'Advantages__Item'}>
          <AdvantagesItem
            title = {'Protected'}
            description = {'Electrum Dash client never sends private keys to the servers. Only you will have access to the funds.'}
            imgSrc = {'/images/shield.svg'}
          />
      </div>

      <div className={'Advantages__Item'}>
          <AdvantagesItem
            title = {'It\'s open source'}
            description = {'Client is being developed with the support of Dash DAO and is open source on GitHub.'}
            imgSrc = {'/images/open-source.svg'}
          />
      </div>

      <div className={'Advantages__Item'}>
          <AdvantagesItem
            title = {'Lightweight'}
            description = {'There is no need to download blockchain. The wallet does not take up much space.'}
            imgSrc = {'/images/feather.svg'}
          />
      </div>

      <div className={'Advantages__Item'}>
          <AdvantagesItem
            title = {'Fast speed'}
            description = {'Startup times are instant because it operates in conjunction with high-performance servers that handle the most complicated parts of the Dash system.'}
            imgSrc = {'/images/speedometer.svg'}
          />
      </div>

    </section>
  );
}
