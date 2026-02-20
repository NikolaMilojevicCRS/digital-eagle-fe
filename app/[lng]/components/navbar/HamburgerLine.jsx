import styles from './Navbar.module.scss';

const HamburgerLine = props => {
  const { activeStyle } = props;

  return <div className={styles.Line} style={activeStyle}></div>;
};

export default HamburgerLine;
