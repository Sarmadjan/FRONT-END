/* eslint-disable react/prop-types */


const Button2 = (props) => {
  return (
    <div>
      <button style={{  padding: "15px", backgroundColor:"transparent", borderRadius: "25px", border:'none', color:'white', fontWeight:'500' }}>
      {props.text}
    </button>
    </div>
  )
}

export default Button2;
