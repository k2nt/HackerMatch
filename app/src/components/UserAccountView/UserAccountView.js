import React from 'react';
import './UserAccountView.css';
import { Link } from 'react-router-dom';
import dummyAvatar from '../../assets/images/johhdoe.jpeg';
import Button from '../Button/Button';
import backArrow from '../../assets/images/arrow-left.png';

const ShortField = ({
  title,
  value,
}) => {
  return (
    <div className='short-field'>
      <h5>{`${title}:`}<span>{value}</span></h5>
    </div>
  );
}

const ParagraphField = ({
  title,
  value,
}) => {
  return (
    <div className='paragraph-field'>
      <h5>
        <span>{`${title}:`}</span>
        <textarea
          value={value}
          readOnly
        />
      </h5>
    </div>
  )
}

const InterestTagsField = ({
  title,
  tagList
}) => {

  const TAGS = [ 
    { title: "Mobile", json: 'mobile', color: "#2f4f4f" },
    { title: "Web", json: 'webApp', color: "#005B6E" },
    { title: "STEM", json: 'stem', color: "#04668C"},
    { title: "Security", json: 'security', color: "#3C6CA7" }, 
    { title: "FinTech", json: 'fintech', color: "#726EB7" }, 
    { title: "AI/ML", json: 'aiml', color: "#726EB7" }, 
    { title: "Quirky hacks", json: 'funniest', color: "#A86BBA" },
    { title: "AR-VR", json: 'arvr', color: "cadetblue" },
    { title: "Embedded systems", json: 'embedded', color: "#DA66AC" },
    { title: "Cloud", json: 'cloud', color: "#FF6792" }
  ];

  return (
    <div className='interest-tags-field'>
      <h5>{`${title}:`}</h5>
      <div className='interest-tags-container'>
        {
          TAGS.map(tag => {

            if (tagList[tag.json]) {            
              return(
                <div className='interest-tags' style={{ backgroundColor: tag.color }} >
                  {tag.title}
                </div>
              )
            } else {
              return (
                <div></div>
              )
            }

          })
        }
      </div>
    </div>
  );
  
}

const UserAccountView = ({userData}) => {

  return (
    <div className='user-account-container'>
      <div className='avatar-container'>
        <img className='avatar-img' 
          alt="avatar"
          src={dummyAvatar}
        />
        <h3 className='avatar-name'>
          {userData.personal.name}
        </h3>
      </div>

      <div className='user-info-container'>
        <ShortField 
          title="Email"
          value={userData.personal.email}
        />
        <ShortField 
          title="Major"
          value={userData.personal.major}
        />
        <ParagraphField 
          title="Other contacts"
          value={userData.personal.otherContacts}
        />
        <ParagraphField 
            title="Project pitch"
            value={userData.projectPitch}
        />
        <InterestTagsField
          title="Interests"
          tagList={userData.interests}
        />
        <div className='short-fields-container'>
          <ShortField 
            title="Skills"
            value={userData.skills}
          />
          <ShortField 
            title="Favorite movie"
            value={userData.personal.favMovie}
          />
        </div>
      </div>

      {/* Back button */}

      <div className='back-btn-container'>
        <Link to='/'>
          <Button btnStyle='btn--transparent' btnSize='btn--wrap'>
            <img
              alt="back arrow"
              src={backArrow}
              style={{
                height: "60px"
              }}
            />
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default UserAccountView;