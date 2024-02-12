import { motion as m, AnimatePresence } from 'framer-motion'
import './Advantages.scss'
import './AdvantagesItem.scss'

function AdvantagesItem({title, description, imgSrc}) {
  return (
    <div className={'AdvantagesItem'}>
      <div className={'AdvantagesItem__ImgContainer'}>
        <img className={'AdvantagesItem__Img'} alt={ title } src={ imgSrc } />
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
        <m.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .3 }}
        >
          <AdvantagesItem
            title = {'Protected'}
            description = {'Dash Electrum client never sends private keys to the servers. Only you will have access to the funds.'}
            imgSrc = {'/images/shield.svg'}
          />
        </m.div>
      </div>

      <div className={'Advantages__Item'}>
        <m.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .3, delay: .1 }}
          >
          <AdvantagesItem
            title = {'It\'s open source'}
            description = {'Client is being developed with the support of Dash DAO and is open source on GitHub.'}
            imgSrc = {'/images/open-source.svg'}
          />
        </m.div>
      </div>
      
      <div className={'Advantages__Item'}>
        <m.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .3, delay: .2 }}
          >
          <AdvantagesItem
            title = {'Lightweight'}
            description = {'There is no need to download blockchain. The wallet does not take up much space.'}
            imgSrc = {'/images/feather.svg'}
          />
        </m.div>
      </div>

      <div className={'Advantages__Item'}>
        <m.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .3, delay: .3 }}
          >
          <AdvantagesItem
            title = {'Fast speed'}
            description = {'Startup times are instant because it operates in conjunction with high-performance servers that handle the most complicated parts of the Dash system.'}
            imgSrc = {'/images/speedometer.svg'}
          />
        </m.div>
      </div>

    </section>
  );
}
