import React, { Component, PropTypes } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table className="scroll">
        <thead>
          <tr>
            <th>This is the description!</th>
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
            <th>Four</th>
            <th>Five</th>
            <th>Six</th>
            <th>Seven</th>
            <th>Eight</th>
            <th>Nine</th>
            <th>Ten</th>
            <th>Eleven</th>
            <th>Twelve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{display:'block', width:'400px'}}>These are all the words that people use to describe Foundation 6!</td>
            <td>Cool</td>
            <td>Swag</td>
            <td>Chill</td>
            <td>Killer</td>
            <td>Rad</td>
            <td>Baller</td>
            <td>OMG</td>
            <td>Sweet</td>
            <td>Awesome</td>
            <td>Beast</td>
            <td>Dope</td>
            <td>Tubular</td>
          </tr>
          <tr>
            <td>These are some words that people use to describe other web frameworks.</td>
            <td>Whatevs</td>
            <td>Ugh.</td>
            <td>LOL</td>
            <td>K</td>
            <td>Aight</td>
            <td>Eh.</td>
            <td>Grrr...</td>
            <td>Meh.</td>
            <td>TTYL</td>
            <td>Bleh.</td>
            <td>Really?</td>
            <td>Why?</td>
          </tr>
          <tr>
            <td>Here are some great super heros.</td>
            <td>Batman</td>
            <td>Superman</td>
            <td>Spiderman</td>
            <td>Wonder Woman</td>
            <td>Hulk</td>
            <td>Nicolas Cage</td>
            <td>Antman</td>
            <td>Aquaman</td>
            <td>Captain America</td>
            <td>Wolverine</td>
            <td>Thor</td>
            <td>Iron Man</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Here is a footer, just in case</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    )
  }
}
