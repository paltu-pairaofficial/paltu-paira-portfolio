import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Section({eyebrow,title,children,className=''}:{eyebrow?:string,title:string,children:React.ReactNode,className?:string}){
  return (
    <section className={`section ${className}`}>
      <div className="section-head">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <motion.h2
            initial={{
              color:'#11100f',
              textShadow:'0 0 0 rgba(245,171,255,0)'
            }}
            whileInView={{
              color:'#f94d3d',
              textShadow:'0 0 14px rgba(245,171,255,.45)'
            }}
            viewport={{
              once:false,
              amount:0.6
            }}
            transition={{
              duration:0.6,
              ease:'easeOut'
            }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
      <Reveal>{children}</Reveal>
    </section>
  );
}