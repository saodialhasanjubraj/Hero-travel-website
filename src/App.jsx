
import './App.css'

function App() {



 


  return (
    <div className='w-full max-w-300 m-auto mt-6'>
    <button className="btn btn-xl btn-dash btn-secondary">Default</button>
    <button className='btn-primary btn btn-wide btn-lg'>click Me</button>



<details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content dropdown-center bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<br />
<progress className="progress w-56 progress-accent"></progress>
<progress className="progress progress-warning w-56"  value={57} max="100"></progress>

<br /><br /><br />
{/* For TSX uncomment the commented types below */}
<div className="radial-progress text-primary" style={{ "--value": `${bx}` } /* as React.CSSProperties */ } aria-valuenow={bx} role="progressbar">
  {bx}%
</div>
    </div>
  )
}

export default App
