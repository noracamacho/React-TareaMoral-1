import UsersData from '../data/UsersData'

function FreeTime() {
  let dataIndex = 2;
  const {mainLine, line1, line2, line3, backGround} = UsersData[dataIndex]
  const showAlert = () => {
    document.querySelector(".containerCover").classList.add("darkenPage");
    setTimeout(function(){
        alert(mainLine);
        document.querySelector(".containerCover").classList.remove("darkenPage");
    }, 100);
  } 
  return (
          <div onClick={() => showAlert()} id={dataIndex} className="card" style={{ background: backGround }}>
            <h3 className='title'>{mainLine}</h3>
            <ul>
              <li>{line1}</li>
              <li>{line2}</li>
              <li>{line3}</li>
            </ul>
          </div>
  )
}
export default FreeTime