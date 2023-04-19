
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyle from '../header/appHeader.module.css'


function AppHeader() {

  return (
    <header className={headerStyle.header} >
            <nav className={headerStyle.container} >
                <a href='/#' className={headerStyle.logo}>
                    <Logo />
                </a>
                <section className={headerStyle.nav}>
                    <section className={headerStyle.navMenu}>
                        <section className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                            <a href='/#' className={headerStyle.navIcon}>
                                <BurgerIcon type="primary" />
                            <span className={`${headerStyle.navTetxt} text text_type_main-default ml-2`}>
                                Конструктор
                            </span>
                            </a>
                        </section >
                        <section className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4 ml-2`}>
                            <a href='/#' className={headerStyle.navIcon}>
                                <ListIcon type="secondary" />
                            
                            <span className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                                Лента заказов
                            </span>
                            </a>
                        </section>
                    </section>
                    <section className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                        <a href='/#' className={headerStyle.navIcon}>
                            <ProfileIcon type="secondary" />
                          
                        <span className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                            Личный кабинет
                        </span>
                        </a>
                    </section>
                </section>
            </nav>
        </header>
    )
  
}

export default AppHeader;