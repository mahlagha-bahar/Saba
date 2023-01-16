import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
export default function Services() {
    return (
        <div className='services'>
            {/* right side */}
            <div className='awesome'>
                <span>خدمات</span>
                <span>عالی من</span>
                <span> طراح گرافیک از این متن به عنوان 
                    عنصری از ترکیب بنه 
                    ک

                    فاده می نماید، تا از نظر گراف<br/>
                    یکی نشانگر چگونگی نوع و انداز
                    ه فونت . معمولا
                    طراحان گرافیک برای صفحه‌آرایی</span>
                    <button className='button s-button'>دانلود رزومه</button>
                    <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
            </div>
            {/* leftside */}
            
            <div className='cards'>من سمت چپ هستم</div>
        </div>
    )
}