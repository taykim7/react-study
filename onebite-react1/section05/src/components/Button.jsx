const Button = ({text='버튼', color='green', children}) => {
  return <button style={{color: color}}>
    {text}
    {children}
  </button>;
};

// Button.defaultProps = {
//   color: 'green'
// }

// Warning: Button: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
// defaultProps는 React19 버전부터 사용이 중지된다.
// 이제는 const App = ( {data = '기본값} ) => { ... } 이런식으로 default 값을 지정한다.

export default Button;
