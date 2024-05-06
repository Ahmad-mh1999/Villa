import './PagesHero.css';

function PagesHero({name}) {
  return (
    <div className='pages-hero'>
        <div className="page-title">
            <div className="page-url">
                <h5>HOME / {name}</h5>
            </div>
            <div className="page-name">
                <h3>
                    {name}
                </h3>
            </div>
        </div>
    </div>
  )
}

export default PagesHero