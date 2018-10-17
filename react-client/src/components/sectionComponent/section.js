import React, { Component } from 'react';

class Section extends Component {
	createSubSections() {
		const sectionImgUrls = this.props.imgUrls;
    const alt = this.props.alternate;
    return (   
      sectionImgUrls.map(function(url) {
          return <SubSection imgUrl={url} alternate={alt}/>;
       })          
    )
  }
  render() {
    return (
    	<div className="section">
      	{this.createSubSections()}
      </div>
    )
  }
}

const SubSection = ({ imgUrl, alternate }) => (
  <div className={`subsection ${alternate}`}>
    <div className="section-col section-img">
      <span className=" section-img hi">
        <img src={imgUrl} />
      </span>
    </div>
    <div className="section-col section-info">
      <h2>Title</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor maximus ligula, nec ultrices enim mattis vitae. Aenean sem justo, elementum non lobortis a, rutrum et mi. Aenean tempor feugiat dignissim. Donec accumsan nisl sit amet est varius facilisis. Maecenas a metus sem. Donec non erat eu lectus ultricies vehicula. Vivamus tincidunt justo ac lacinia pretium. Morbi pulvinar leo eu odio dictum feugiat. Nam quis tellus ac neque finibus sagittis.</p>
    </div>
  </div>
);

export default Section;