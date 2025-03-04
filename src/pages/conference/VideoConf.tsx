import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function randomID(len:any) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
  export function getUrlParams(
    url = window.location.href
  ) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }

const VideoConf = () => {
    const roomID = getUrlParams().get('roomID') || randomID(5);
    let myMeeting = async (element:any) => {
  
   // generate Kit Token
   const appID = 1186138834;
   const serverSecret = "90ad678d59d19a40a6ca0df5b6def343";
   const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));
  
   // Create instance object from Kit Token.
   const zp = ZegoUIKitPrebuilt.create(kitToken);
   // start the call
   zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
           mode: ZegoUIKitPrebuilt.VideoConference,
          },
     });
    };
  return (
    <div
      className="myCallContainer flex min-h-screen items-center justify-center"
      ref={myMeeting}
    ></div>
  )
}

export default VideoConf