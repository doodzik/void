import React,  { Component } from "react"
import TagsInput             from 'react-tagsinput'
import Radium from 'radium'
import Color from 'color'
import moment from 'moment'
import SC from 'soundcloud'

require('./tag.css')

@Radium
export default class Tags extends Component {
  saveTags() {
    // SC.stream(`/tracks/${id}`).then(function(player){
    //   player.play();
    // });

    this.props.triggerSearched()
    const tags = this.refs.tags.getTags().join(', ')
    // const created_at_to = moment().subtract(2, 'day').format('YYYY-MM-DD hh:mm:ss')
    const created_at_from = moment().subtract(1, 'day').format('YYYY-MM-DD hh:mm:ss')

    SC.get('/tracks', { tags, limit, "created_at[from]": created_at_from }).then(tracks => {
      console.log(tracks)
    })
  }

  render() {
    return (
      <div style={[
        {
          display: 'flex',
          marginBottom: '2em'
        }
      ].concat(this.props.style || [])}>
        <TagsInput ref='tags' />
        <button
          onClick={this.saveTags.bind(this)}
          style={[{
            maxWidth: '6em',
            flex: 1,
            background: 'rgba(255,55,255,1)',
            border: 'none',
            transition: 'background-color 200ms, border 200ms',
            ':hover': {
                background: Color('rgb(255,55,255)').lighten(0.2).hexString()
              },
            ':active': {
                background: Color('rgb(255,55,255)').lighten(0.2).hexString(),
                border: '4px inset rgba(0, 0, 0, 0.33)',
                outline: 'none'
            },
            ':focus': {
                outline: 'none'
            }
            }]}
        >Search</button>
      </div>
    );
  }
}
