angular.module("Appshare")

.service('Share',function ()
  {

    this.deelTwitter = function(t)
    {
      twttr.widgets.createShareButton(
      'http://www.iamprogrez.com/products/iam-it/',
      document.getElementById('container'),
      {
        text: t,
        hashtags:"iamprogrez,iam-it",
      });
        twttr.events.bind('tweet', function (event)
        {
            console.log('Gelukt');
        }
      ) ;


   }

    this.deelFacebook = function(d,p)
    {

       FB.ui(
        {
          method: 'feed',
          link:'http://www.iamprogrez.com/products/iam-it/',
          description:d,
          picture:p,

        },
        function(response)
        {
            if (response && !response.error_message)
            {
              console.log('Posting completed.');
            }
            else
            {
              console.log('Error while posting.');
            }
      });
  }
});
