interface IHeaderLogo {
  isActive?: boolean;
}

type PageActive = {
  home: boolean;
  orqFuturos: boolean;
};

type IHeaderHook = {
  pageActive: PageActive;
};
