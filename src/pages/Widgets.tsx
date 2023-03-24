
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='col-span-2 mt-2 lg:top-[200px] lg:h-[200px] bg-black px-2 hidden lg:inline'>
        {/*Search */}
      

        <TwitterTimelineEmbed 
        sourceType="profile"
        screenName="AlchemyPlatform"
        options={{height: 500}}
        theme="dark"
        />
   
         <TwitterHashtagButton
        tag={'webdevelopers'}
  />

    </div>
  )
}

export default Widgets