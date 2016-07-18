import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className="row">
      		<div className="small-12 columns">
      			<hr/>
      			<div className="row">
      				<div className="small-12 medium-6 columns">
      					<ul className="inline-list">
      						<li><a href="#">Footer1</a></li>
      						<li><a href="#">Footer2</a></li>
      					</ul>
      				</div>
      				<div className="small-12 medium-6 columns medium-text-right">
      					<p><small>Copyright &copy; 2016 hoge Inc. All rights reserved.</small></p>
      				</div>
      			</div>
      		</div>
      	</div>
      </footer>
    )
  }
}
