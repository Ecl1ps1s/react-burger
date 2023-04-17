
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyle from '../header/appHeader.module.css'


function AppHeader() {

  return (
    <header className={headerStyle.header} >
            <div className={headerStyle.container} >
                <div className={headerStyle.logo}>
                    <Logo />
                </div>
                <nav className={headerStyle.nav}>
                    <div className={headerStyle.navMenu}>
                        <div className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                            <div className={headerStyle.navIcon}>
                                <BurgerIcon type="primary" />
                            </div>
                            <span className={`${headerStyle.navTetxt} text text_type_main-default ml-2`}>
                                Конструктор
                            </span>
                        </div >
                        <div className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4 ml-2`}>
                            <div className={headerStyle.navIcon}>
                                <ListIcon type="secondary" />
                            </div>
                            <span className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                                Лента заказов
                            </span>
                        </div>
                    </div>
                    <div className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                        <div className={headerStyle.navIcon}>
                            <ProfileIcon type="secondary" />
                        </div>
                        <span className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                            Личный кабинет
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
  
}

export default AppHeader;