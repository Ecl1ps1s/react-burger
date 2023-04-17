
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyle from '../header/appHeader.module.css'


function AppHeader() {

  return (
    <header className={headerStyle.header} >
            <section className={headerStyle.container} >
                <nav className={headerStyle.logo}>
                    <Logo />
                </nav>
                <nav className={headerStyle.nav}>
                    <nav className={headerStyle.navMenu}>
                        <nav className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                            <nav className={headerStyle.navIcon}>
                                <BurgerIcon type="primary" />
                            </nav>
                            <nav className={`${headerStyle.navTetxt} text text_type_main-default ml-2`}>
                                Конструктор
                            </nav>
                        </nav >
                        <nav className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4 ml-2`}>
                            <nav className={headerStyle.navIcon}>
                                <ListIcon type="secondary" />
                            </nav>
                            <nav className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                                Лента заказов
                            </nav>
                        </nav>
                    </nav>
                    <section className={`${headerStyle.navMenuItem} pl-5 pr-5 pb-4 pt-4`}>
                        <nav className={headerStyle.navIcon}>
                            <ProfileIcon type="secondary" />
                        </nav>
                        <nav className={`${headerStyle.navTetxt} text_color_inactive text text_type_main-default ml-2`}>
                            Личный кабинет
                        </nav>
                    </section>
                </nav>
            </section>
        </header>
    )
  
}

export default AppHeader;