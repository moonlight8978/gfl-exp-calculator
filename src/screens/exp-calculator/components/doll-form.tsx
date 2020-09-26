import React, { memo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const DollForm = () => {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <tr aria-disabled={isDisabled}>
      <td>
        <button
          onClick={() => setIsDisabled(!isDisabled)}
          type="button"
          style={{ background: 'transparent', border: 0 }}
        >
          <label htmlFor="isDisabled">
            {isDisabled ? (
              <div className="tooltip">
                <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
                <span className="tooltiptext">This doll is currently disabled. Her exp will not be calculated.</span>
              </div>
            ) : (
              <div className="tooltip">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                <span className="tooltiptext">This doll is currently enabled. Her exp will be calculated.</span>
              </div>
            )}
          </label>
        </button>
        <input id="isDisabled" name="isDisabled" type="checkbox" checked={isDisabled} style={{ display: 'none' }} />
      </td>
      <td>
        <table style={{ background: 'transparent !important' }}>
          <tbody>
            <tr>
              <td>
                <input id="isLeader" name="isLeader" type="checkbox" className="checkbox" />
                <label htmlFor="isLeader">Is Leader</label>
              </td>
              <td>
                <input id="isMvp" name="isMvp" type="checkbox" className="checkbox" />
                <label htmlFor="isMvp">Is MVP</label>
              </td>
              <td>
                <label htmlFor="type">
                  Gun type:
                  <select id="type">
                    <option>HG</option>
                    <option>SMG</option>
                    <option>AR</option>
                    <option>RF</option>
                    <option>MG</option>
                    <option>SG</option>
                  </select>
                </label>
              </td>
              <td>
                <label htmlFor="currentLevel">
                  Current level:
                  <input type="number" max="120" min="1" name="currentLevel" />
                </label>
              </td>
              <td>
                <label htmlFor="currentExp">
                  Current EXP:
                  <input type="number" min="0" name="currentExp" />
                </label>
              </td>
              <td>
                <input id="isSupplied" name="isSupplied" type="checkbox" className="checkbox" />
                <label htmlFor="isSupplied">Is Supplied</label>
              </td>
              <td>
                <label htmlFor="links">
                  Links
                  <select id="links">
                    <option>Auto</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </label>
              </td>
            </tr>
            <tr>
              <td />
              <td style={{ textAlign: 'center' }} colSpan={7}>
                <label htmlFor="targetLevel">
                  Target level:
                  <input type="number" max="120" min="1" name="targetLevel" />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  )
}

export default memo(DollForm)
