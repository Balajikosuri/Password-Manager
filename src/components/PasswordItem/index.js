import './index.css'

const PasswordItem = props => {
  const {record, deletePasswordRecord, showPassword} = props
  const {id, url, name, password, initialClassName} = record

  const passwordPattern = showPassword ? (
    <p className="website-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const deleteItem = () => {
    deletePasswordRecord(id)
  }

  return (
    <li className="password-item">
      <div className={`circle ${initialClassName}`}>{url[0].toUpperCase()}</div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        {passwordPattern}
      </div>
      <button
        type="button"
        onClick={deleteItem}
        className="delete-btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
