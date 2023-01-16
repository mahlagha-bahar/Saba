import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from "../../img/instagram.png"
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
export default function Intro(){
    return(
        <div className='intro'>
            <div className='i-right'>
                <div className='i-name'>
                    <span>سلام! من هستم </span>
                    <span>سهیلا</span>
                    <span> یک فرانت اند دولوپر هستم طراح سایت با ری اکت </span>
                
                </div>
                <button className='button i-button'> در خدمتم</button>
            <div className='i-icons'>
                <a href='https://github.com/mahlagha-bahar/calculator-project'><img src={Github} alt=''/></a>
                
                <img src={Linkedin} alt=''/>
                <img src={Instagram} alt='' />
            </div>
            </div>
            <div className='i-left'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <div style={{top:'-4%',left:'67%'}}>
                    <FloatingDiv image={Crown} txt1='طراح' txt2='سایت'/>
                </div>
                <div style={{top:'18rem', left:'1.6rem'}}>
                    <FloatingDiv image={thumbup} txt1='طراح' txt2="سایت" />
                </div>
                {/* blur dives */}
                <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
                <div className='blur' style={{top:'17rem',width:"21rem",background:'#C1F5FF',height:'11rem',left:'-9rem'}}></div>
            </div>
        </div>
    )
}