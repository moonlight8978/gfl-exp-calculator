import React, { ChangeEvent, useState } from 'react'
import produce from 'immer'

import DollForm from './components/doll-form'

const ExpCalculatorScreen = () => {
  const [dolls, setDolls] = useState(new Array(5).fill(0))

  const onCorpseDragChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDolls(
        produce((currentDolls) => {
          currentDolls.push(0)
        })
      )
    } else {
      setDolls(
        produce((currentDolls) => {
          currentDolls.pop()
        })
      )
    }
  }

  return (
    <div>
      <form>
        <div>
          <span>Do you corpse drag?</span>
          <input type="radio" name="corpseDrag" className="checkbox" id="corpseDrag" onChange={onCorpseDragChange} />
          <label htmlFor="corpseDrag">Yes</label>
        </div>

        <table id="mainTable">
          <tbody>
            {dolls.map((_value, index) => (
              <DollForm key={index.toString()} />
            ))}
          </tbody>
        </table>

        <div>
          <span>
            Do you use{' '}
            <a href="https://en.gfwiki.com/wiki/Command_Fairy" title="Command fairy">
              Command Fairy
            </a>
            ?
          </span>
          <input type="radio" name="isCommandFairyUsed" className="checkbox" id="isCommandFairyUsed" />
          <label htmlFor="isCommandFairyUsed">Yes</label>

          <label htmlFor="commandFairySkillLevel">
            Skill level:
            <select id="links">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10 (MAX)</option>
            </select>
          </label>
        </div>

        <div>
          <span>Is 1.5 EXP event campaign?</span>
          <input type="radio" name="isCampaign" className="checkbox" id="isCampaign" />
          <label htmlFor="isCampaign">Yes</label>
        </div>

        <div>
          <label htmlFor="mapId">
            Which map do you go?
            <select id="mapId">
              <option>3-2 (260 EXP) (40)</option>
              <option>3-5 (290 EXP) (50)</option>
              <option>3-3E (320 EXP) (60)</option>
              <option>4-3E (370 EXP) (75)</option>
              <option>5-4 (380 EXP) (80)</option>
              <option>5-2E (410 EXP) (75)</option>
              <option>5-4E (430 EXP) (93)</option>
              <option>0-2 (490 EXP) (113)</option>
              <option>0-4 (500 EXP) (115)</option>
              <option>0-4 (500 EXP) (115)</option>
              <option>6-3N (500 EXP) (114)</option>
              <option>8-1N (500 EXP)</option>
              <option>10-4E (500 EXP)</option>
              <option>11-5 (550 EXP)</option>
              <option>11-6 (560 EXP)</option>
            </select>
          </label>

          <label htmlFor="mapNodesCount">
            How many node will you clear?
            <input type="number" min="1" name="mapNodesCount" id="mapNodesCount" />
          </label>
        </div>

        <input type="button" value="Calculate" />
        <input type="button" value="Reset" />
      </form>
    </div>
  )
}

export default ExpCalculatorScreen
