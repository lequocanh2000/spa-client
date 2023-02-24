import '../../../assets/css/Admin/Welcome.css'
import admin from '../../../assets/img/user/admin.PNG'
// import logo from '../../assets/img/logo.PNG'

function Welcome(){
    return (
        <div className="welcome">
            <div className="grid">
                <div className="row no-gutters">
                    <div className="col pc-12 t-12 mb-12">
                        <div className="card">
                            <div className="card__heading">
                                <div className="card__avatar">
                                    <img src={admin} alt="avatar Admin" className="card__avatar-img"/>
                                </div>
                            </div>
                            <div className="card__body">
                                <div className="card__body-title">Welcome Andy! How are you to day?</div>
                                <div className="card__body-text">Wish you have an active and creative working day!</div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Welcome