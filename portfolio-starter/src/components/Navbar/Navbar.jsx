import './Navbar.css'
export default function Navbar(){
    return(
        <div className="n-wrapper">
            <div className="n-right">
<div className="n-name">سهیلا</div>
<span> تغییر وضعیت</span>
            </div>
            <div className="n-left">
                <div className="n-list">
<ul style={{listStyleType:'none'}}>
    <li>خانه</li>
    <li> خدمات</li>
    <li>تجارب</li>
    <li>نمونه</li>
    <li>توصیفات</li>
</ul>

                </div>
                <button className='button n-button'>تماس</button>
            </div>
        </div>
    )
}