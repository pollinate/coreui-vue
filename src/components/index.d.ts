import Vue from 'vue'
export declare class CAlert extends Vue {
  color: string
  closeButton: boolean
  show: boolean
  fade: boolean
}

export declare class CBadge extends CLink {
  tag: string
  color: string
  pill: boolean
}

export declare class CBreadcrumb extends Vue {
  items: Array<any>
  addClasses: [string, Array<any>, object]
  addLinkClasses: [string, Array<any>, object]
  addLastItemClasses: [string, Array<any>, object]
}

export declare class CBreadcrumbRouter extends Vue {
  addClasses: [string, Array<any>, object]
  addLinkClasses: [string, Array<any>, object]
  addLastItemClasses: [string, Array<any>, object]
}

export declare class CButton extends CLink {
  block: boolean
  pill: boolean
  square: boolean
  ghost: boolean
  outline: boolean
  size: string
  color: string
  type: string
  pressed: boolean
}

export declare class CButtonClose extends Vue {
  iconHtml: string
  buttonClasses: [string, Array<any>, object]
}

export declare class CButtonGroup extends Vue {
  vertical: boolean
  size: string
}

export declare class CButtonToolbar extends Vue {
  justify: boolean
}

export declare class CCallout extends Vue {
  color: string
}

declare class CardSharedClasses extends Vue {
  tag: string
  color: string
  borderColor: string
  textColor: string
  align: string
}

export declare class CCard extends CardSharedClasses {
  headerHtml: string
  bodyHtml: string
  footerHtml: string
  bodyWrapper: boolean
}

export declare class CCardBody extends CardSharedClasses {}

export declare class CCardFooter extends CardSharedClasses {}

export declare class CCardHeader extends CardSharedClasses {}

export declare class CCardImg extends CImg { 
  placement: string
}

export declare class CCardImgOverlay extends Vue {
  tag: string
}

export declare class CCardLink extends CLink {}

export declare class CCardSubtitle extends Vue {
  tag: string
}

export declare class CCardTitle extends Vue {
  tag: string
}

export declare class CCardtext extends Vue {
  tag: string
}

export declare class CCardGroup extends Vue {
  tag: string
  deck: boolean
  columns: boolean
}

export declare class CCarousel extends Vue {
  interval: number
  animate: boolean
  indicators: boolean
  arrows: boolean
  indicatorClasses: [string, Array<any>, object]
  height: string
}

export declare class CCarouselItem extends Vue {
  image: [string, object]
  captionHeader: string
  captionText: string
  active: boolean
}

export declare class CCollapse extends Vue {
  duration: number
  transition: string
  show: boolean
  navbar: boolean
}

export declare class CDropdown extends Vue {
  togglerText: string
  show: boolean
  disabled: boolean
  addMenuClasses: [string, Array<any>, object]
  addTogglerClasses: [string, Array<any>, object]
  inNav: boolean
  caret: boolean
  color: string
  size: string
  split: boolean
  offset: number
  placement: string
  flip: boolean
  popperConfig: object
}

export declare class CDropdownDivider extends Vue {
  tag: string
}

export declare class CDropdownHeader extends Vue {
  tag: string
}

export declare class CDropdownItem extends CLink {}

export declare class CEmbed extends Vue {
  type: string
  ratio: string
  tag: string
}

export declare class CFooter extends Vue {
  tag: string
  fixed: boolean
}

declare class formSharedProps extends Vue {
  validFeedback: string
  invalidFeedback: string
  tooltipFeedback: boolean
  description: string
}

export declare class CInputFile extends formSharedProps {
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]

  custom: boolean
  placeholder: string
  multiple: boolean
}

export declare class CFormGroup extends formSharedProps {
  appendHtml: string
  prependHtml: string
  wrapperClasses: [string, Array<any>, object]
}

export declare class CInput extends formSharedProps {
  type: string
  appendHtml: string
  prependHtml: string
  readonly: boolean
  plaintext: boolean
  value: string
  lazy: [boolean, number]
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]
}

export declare class CInputRadio extends formSharedProps {
  appendHtml: string
  prependHtml: string

  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]

  checked: [boolean, string, number]
  value: [string, number, boolean]
  custom: boolean
  inline: boolean
}

export declare class CInputCheckbox extends CInputRadio {
  checked: boolean
}

export declare class CSelect extends formSharedProps {
  appendHtml: string
  prependHtml: string

  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]

  options: Array<any>
  value: [string, number, boolean, Array<any>]
  plaintext: boolean
  placeholder: string
  custom: boolean
}

export declare class CTextarea extends formSharedProps {
  appendHtml: string
  prependHtml: string
  readonly: boolean
  plaintext: boolean
  value: string
  lazy: [boolean, number]
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]
}

export declare class CCol extends Vue {
  col: [ boolean, string, number, object ]
  xs: [ boolean, string, number, object ]
  sm: [ boolean, string, number, object ]
  md: [ boolean, string, number, object ]
  lg: [ boolean, string, number, object ]
  xl: [ boolean, string, number, object ]
  tag: string
}

export declare class CContainer extends Vue {
  fluid: boolean
  tag: string
}

export declare class CRow extends Vue {
  tag: string
  gutters: boolean
  alignVertical: string
  alignHorizontal: string
}

export declare class CHeader extends Vue {
  fixed: boolean
  tag: string
  colorScheme: string
  withSubheader: boolean
}

export declare class CHeaderNav extends Vue {}

export declare class CHeaderNavItem extends CLink {}

export declare class CImg extends Vue {
  src: string
  alt: string
  width: [number, string]
  height: [number, string]
  block: boolean
  fluid: boolean
  fluidGrow: boolean
  rounded: [boolean, string]
  thumbnail: boolean
  align: string
  placeholderColor: string
}

export declare class CImgLazy extends CImg {
  loadInitially: boolean
  loadOffset: number
  fade: boolean
  fadeOffset: number
  fadeTime: number
}

export declare class CJumbotron extends Vue {
  tag: string
  fluid: boolean
  header: string
  lead: string
  color: string
  borderColor: string
  textColor: string
}

export declare class CLink extends Vue {
  href: string
  rel: string
  target: string
  disabled: boolean
  active: boolean
  activeClass: string
  append: boolean
  event: [string, Array<any>]
  exact: boolean
  exactActiveClass: string
  replace: boolean
  routerTag: string
  to: [string, object]
}

export declare class CListGroup extends Vue {
  tag: string
  flush: boolean
  horizontal: [string, boolean]
}

export declare class CListGroupitem extends CLink {
  tag: string
  action: boolean
  color: string
}

export declare class CMedia extends Vue {
  addAsideMargin: boolean
  addAsideClasses: [string, Array<any>, object]
  addBodyClasses: [string, Array<any>, object]
  asideRight: boolean
  asideImageProps: object
  asideVerticalPosition: string
}

export declare class CModal extends Vue {
  show: boolean
  centered: boolean
  title: string
  size: string
  color: string
  borderColor: string
  fade: boolean
  backdrop: boolean
  closeOnBackdrop: boolean
  addModalClasses: [string, Array<any>, object]
  addDialogClasses: [string, Array<any>, object]
  addContentClasses: [string, Array<any>, object]
}

export declare class CNav extends Vue {
  fill: boolean
  justified: boolean
  tabs: boolean
  pills: boolean
  vertical: boolean
  inCard: boolean
}

export declare class CNavItem extends CLink {}

export declare class CNavbar extends Vue {
  tag: string
  light: boolean
  color: string
  expandable: [boolean, string]
  fixed: string
  sticky: boolean
}

export declare class CNavbarBrand extends CLink {
  tag: string
}

export declare class CNavbarNav extends Vue {
  tag: string
}

export declare class CPagination extends Vue {
  activePage: number
  pages: number
  size: string
  align: string
  limit: number
  dots: boolean
  arrows: boolean
  doubleArrows: boolean
  firstButtonHtml: string
  previousButtonHtml: string
  nextButtonHtml: string
  lastButtonHtml: string
  responsive: boolean
}

export declare class CProgress extends Vue {
  height: string
  color: string
  striped: boolean
  animated: boolean
  precision: number
  showPercentage: boolean
  showValue: boolean
  max: number
  value: number
}

export declare class CProgressBar extends CProgress {}

export declare class CRenderFunction extends Vue {
  items: array
}
export declare class CScrollbar extends Vue {
  settings: object
  switcher: boolean
  tag: string
}

export declare class CSidebar extends Vue {
  fixed: boolean
  unfoldable: boolean
  breakpoint: [string, boolean]
  minimize: boolean
  show: boolean
  hideOnMobileClick: boolean
  aside: boolean
  colorScheme: string
  dropdownMode: string
  size: string
  overlaid: boolean
}

export declare class CSidebarClose extends Vue { }

export declare class CSidebarFooter extends Vue {}

export declare class CSidebarForm extends Vue {}

export declare class CSidebarHeader extends Vue {}

export declare class CSidebarMinimizer extends Vue {}

export declare class CSidebarNav extends Vue {
  navItems: Array<any>
}

export declare class CSidebarNavDivider extends Vue {}

export declare class CSidebarNavDropdown extends Vue {
  name: string
  route: string
  icon: string
  show: boolean
}

export declare class CSidebarNavItem extends Vue {
  item: object
}

export declare class CSidebarNavItems extends Vue {
  items: Array<any>
}

export declare class CSidebarNavLabel extends Vue {
  name: string
  url: string
  icon: string
}

export declare class CSidebarNavLink extends CLink {
  name: string
  icon: [string, Array<any>, object]
  badge: object
  url: string
}

export declare class CSidebarNavTitle extends Vue {
  name: string
  wrapper: object
}

export declare class CSidebarNavToggler extends Vue {}

export declare class CSpinner extends Vue {
  grow: boolean
  color: string
  size: string
  tag: string
}

export declare class CSwitch extends Vue {
  color: string
  outline: [boolean, string]
  size: string
  shape: string
  checked: boolean
  value: [string, number, boolean]
  labelOn: string
  labelOff: string
  type: string
}

export declare class CTable extends Vue {
  items: Array<any>
  fields: Array<any>
  itemsPerPage: number
  activePage: number
  indexColumn: boolean
  filterRow: boolean
  pagination: [boolean, object]
  addTableClasses: [string, Array<any>, object]
  responsive: boolean
  sorting: boolean
  small: boolean
  dark: boolean
  striped: boolean
  fixed: boolean
  hover: boolean
  border: boolean
  outlined: boolean
  optionsRow: [boolean, string]
  footer: boolean
  defaultSorter: object
  defaultTableFilter: string
  defaultColumnFilter: object
  loading: boolean
}

export declare class CTabs extends Vue {
  fill: boolean
  justified: boolean
  pills: boolean
  tabs: boolean
  fade: boolean
  vertical: [boolean, object]
  addNavWrapperClasses: [string, Array<any>, object]
  addNavClasses: [string, Array<any>, object]
  addTabsWrapperClasses: [string, Array<any>, object]
  addTabsClasses: [string, Array<any>, object]
  addTabClasses: [string, Array<any>, object]
}

export declare class CTab extends Vue {
  titleHtml: string 
  active: boolean
  disabled: boolean
}

declare class ToastProps extends Vue {
  position: string
  autohide: number
  closeButton: boolean
  fade: boolean
}

export declare class CToast extends ToastProps {
  show: boolean
  headerHtml: string
  bodyHtml: string
}

export declare class CToaster extends ToastProps {
  reverse: boolean
}

export declare class CToggler extends Vue {
  tag: string
  inNavbar: boolean
  inHeader: boolean
}

export declare class CTreeGenerator extends Vue {
  items: object
  components: object
}

export declare class CTreeGeneratorItem extends Vue {
  item: [string, object]
  name: string
  components: object
}

export declare class CWidgetBrand extends Vue {
  color: string
  rightHeader: string
  rightFooter: string
  leftHeader: string
  leftFooter: string
  addHeaderClasses: [string, Array<any>, object]
}

export declare class CWidgetDropdown extends Vue {
  color: string
  header: string
  text: string
}

export declare class CWidgetHeaderDetails extends Vue {
  color: string
  rightHeader: string
  rightFooter: string
  leftHeader: string
  leftFooter: string
}

export declare class CWidgetIcon extends Vue {
  header: string
  text: string
  iconPadding: boolean
  color: string
}

export declare class CWidgetProgress extends Vue {
  header: string
  text: string
  footer: string
  color: string
  inverse: boolean
  value: number
}

export declare class CWidgetProgressIcon extends Vue {
  header: string
  text: string
  color: string
  inverse: boolean
  value: number
}

export declare class CWidgetSimple extends Vue {
  header: string
  text: string
}
