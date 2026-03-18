import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-max py-24 text-center">
      <h1 className="font-display text-5xl font-semibold text-ink">404</h1>
      <p className="mt-4 text-slate-600">This page could not be found.</p>
      <NavLink to="/" className="btn-primary mt-6">
        Back Home
      </NavLink>
    </div>
  )
}

export default NotFound
