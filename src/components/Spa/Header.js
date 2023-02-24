import '../../assets/css/Spa/Header.css'
import logo from '../../assets/img/logo.PNG'
import {Link} from 'react-router-dom'

 

function Header(){
 // click button on mobile
    function handleClickBtnMobile(){
        const header = document.querySelector('.header')
        console.log(header);
        console.log(header.classList);
        header.classList.toggle('header--heigth-auto')
        console.log(header.classList);
    }
 // handle button on mobile
    //Open modal add 
    function handleModalAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    return (
        <header className="header">
        <div className="grid wide">
            <div className="header__body">
                <div className="header__logo">
                    <img src={logo} alt="logo" className="header__logo-image"/>
                </div>
                <ul className="nav" >
                    <li className="nav__item">
                        <Link to="/Spa/home" className="nav__link">Trang chủ</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/Spa/introduce" className="nav__link">Giới thiệu</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/Spa/news" className="nav__link">Tin tức</Link>
                    </li>
                    <li className="nav__item">
                        <a href='/Spa/home#ContactHelp' className="nav__link">Tư vấn - Hỗ trợ</a>
                    </li>
                    
                    <li className="nav__item">
                        <button className="nav__link nav__link-btn-modal js-btn-modal" onClick={handleModalAdd}>Đặt dịch vụ</button>
                    </li>
                </ul>
            </div>
        </div>

        {/* <!-- Button on mobile start --> */}
        <button className="header__btn-mobile show-on-mobile js-btn-mobile" onClick={handleClickBtnMobile}>
            <i className="header__icon-mobile ti-menu"></i>
        </button>
    </header>
    )
}

export default Header




// function handleClickOpenModal(){
//     const modal = document.querySelector('.js-modal')
//     const modalDialog = document.querySelector('.js-modal-dialog')
//     const modalForm = document.querySelector('.js-modal-form')
//     const btnSubmit = document.querySelector('.js-btn-submit')
//     const btnCancle = document.querySelector('.js-btn-cancle')
//     console.log(modal);
//     console.log(modalForm)
//     console.log(modalDialog);
//     console.log(btnSubmit);
//     console.log(btnCancle);
    
    
//     //Open modal
//     modal.classList.add('open')
//     console.log('open')
    
    
//     //Close modal
//     btnCancle.onclick = () => {
//     modal.classList.remove('open')
//     console.log('close')
//     }
    
//     // stopPropagation when click outside modal
//     modalDialog.addEventListener('click',(e) => {
//         console.log('still show')
//     e.stopPropagation()
//     })
    
//     //Close modal when click outside modal
//     modal.addEventListener('click',(e) => {
//     modal.classList.remove('open')
//     console.log('close')
//     })
    
//     //Submit form
//     btnSubmit.onclick = () => {
//     let name = modalForm[0].value
//     let phone = modalForm[1].value
//     let service = modalForm[2].value
    
//     console.log(typeof name,typeof phone,typeof service);
//     if(name===''||phone===''||service===''){
//         window.confirm(`Vui lòng nhập đầy đủ thông tin`)
//     }else{
//         modal.classList.remove('open')
//         setTimeout(()=>{
//         console.log(`${name} ${phone} ${service}`)
//         window.confirm(`Gửi thành công
//         Họ tên: ${name}
//         SĐT: ${phone}
//         Dịch vụ: ${service}`)
    
//         modalForm[0].value = ''
//         modalForm[1].value = ''
//         modalForm[2].value = ''
//         },500)
//     }

    
// }
// }