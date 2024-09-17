import logo from '../assets/img/logo.png';

export const CustomHeader = () => {
    return (
      <header >
          <img src={logo} alt="Logo" />
          <h1>Gif Search App</h1>
      </header>
    );
}
