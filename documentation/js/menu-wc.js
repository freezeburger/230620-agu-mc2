'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mc2-workspace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-bb620de1dc1c3cb314dc983869cac46605c65ad11a46f8eabf46127bc1fbdc5ce4599634ead1b6769c3a9c9d1e28126a814f679b33510531577648e07979dc2b"' : 'data-bs-target="#xs-components-links-module-AppModule-bb620de1dc1c3cb314dc983869cac46605c65ad11a46f8eabf46127bc1fbdc5ce4599634ead1b6769c3a9c9d1e28126a814f679b33510531577648e07979dc2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bb620de1dc1c3cb314dc983869cac46605c65ad11a46f8eabf46127bc1fbdc5ce4599634ead1b6769c3a9c9d1e28126a814f679b33510531577648e07979dc2b"' :
                                            'id="xs-components-links-module-AppModule-bb620de1dc1c3cb314dc983869cac46605c65ad11a46f8eabf46127bc1fbdc5ce4599634ead1b6769c3a9c9d1e28126a814f679b33510531577648e07979dc2b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-4e3502e91ed4d39037838ea6ac624f3ef9601acd2c139d7cea74f403d3e3c83efce94888031543c8d97248fab6dd4d8c7293c479044cccfe25e2a6e958c632f5"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-4e3502e91ed4d39037838ea6ac624f3ef9601acd2c139d7cea74f403d3e3c83efce94888031543c8d97248fab6dd4d8c7293c479044cccfe25e2a6e958c632f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-4e3502e91ed4d39037838ea6ac624f3ef9601acd2c139d7cea74f403d3e3c83efce94888031543c8d97248fab6dd4d8c7293c479044cccfe25e2a6e958c632f5"' :
                                        'id="xs-injectables-links-module-CoreModule-4e3502e91ed4d39037838ea6ac624f3ef9601acd2c139d7cea74f403d3e3c83efce94888031543c8d97248fab6dd4d8c7293c479044cccfe25e2a6e958c632f5"' }>
                                        <li class="link">
                                            <a href="injectables/PresenterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresenterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UiModule-1c844081cacf984c33df89b23c0a665cd539ea080e3ad3f42be49118b9363b9e10e3ece4475e63747816037cfbbddc6668a837835769162ca07f21c567026ddd"' : 'data-bs-target="#xs-components-links-module-UiModule-1c844081cacf984c33df89b23c0a665cd539ea080e3ad3f42be49118b9363b9e10e3ece4475e63747816037cfbbddc6668a837835769162ca07f21c567026ddd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-1c844081cacf984c33df89b23c0a665cd539ea080e3ad3f42be49118b9363b9e10e3ece4475e63747816037cfbbddc6668a837835769162ca07f21c567026ddd"' :
                                            'id="xs-components-links-module-UiModule-1c844081cacf984c33df89b23c0a665cd539ea080e3ad3f42be49118b9363b9e10e3ece4475e63747816037cfbbddc6668a837835769162ca07f21c567026ddd"' }>
                                            <li class="link">
                                                <a href="components/UiCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiNavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewHomeModule.html" data-type="entity-link" >ViewHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewHomeModule-086541b4ab41646d2393c267e009cb0a0d4f2d5e0c5eef1e0e8806ef5559a04961c772366d3efe1d34ccde1528b834200b8662c5e4711f9437736b3b07bd8e3c"' : 'data-bs-target="#xs-components-links-module-ViewHomeModule-086541b4ab41646d2393c267e009cb0a0d4f2d5e0c5eef1e0e8806ef5559a04961c772366d3efe1d34ccde1528b834200b8662c5e4711f9437736b3b07bd8e3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewHomeModule-086541b4ab41646d2393c267e009cb0a0d4f2d5e0c5eef1e0e8806ef5559a04961c772366d3efe1d34ccde1528b834200b8662c5e4711f9437736b3b07bd8e3c"' :
                                            'id="xs-components-links-module-ViewHomeModule-086541b4ab41646d2393c267e009cb0a0d4f2d5e0c5eef1e0e8806ef5559a04961c772366d3efe1d34ccde1528b834200b8662c5e4711f9437736b3b07bd8e3c"' }>
                                            <li class="link">
                                                <a href="components/ViewHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewHomeRoutingModule.html" data-type="entity-link" >ViewHomeRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PresenterService.html" data-type="entity-link" >PresenterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApplicationState.html" data-type="entity-link" >ApplicationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Process.html" data-type="entity-link" >Process</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessResponse.html" data-type="entity-link" >ProcessResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});