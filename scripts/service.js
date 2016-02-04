angular.module("Appshare")
.service('Delen',function ()
  {
    this.deelTwitter = function()
    {

    }

    this.deelFacebook = function()
    {
       FB.ui(
        {
          method: 'share',
          href: 'https://google.com',
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
