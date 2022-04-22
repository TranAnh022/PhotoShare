export const categories = [
    {
        name: 'animal',
        image: 'https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg'
    },
    {
        name: 'wallpaper',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/df0qcbg-31dfc7f5-dab9-4101-85fe-1b124f319219.jpg/v1/fill/w_622,h_350,q_70,strp/dream_in_colors_by_ellysiumn_df0qcbg-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhYTQ4ZDJkLTEyYzItNDNkMS1iZjIzLWI1ZTk5ODU3ODI1YlwvZGYwcWNiZy0zMWRmYzdmNS1kYWI5LTQxMDEtODVmZS0xYjEyNGYzMTkyMTkuanBnIiwiaGVpZ2h0IjoiPD00NTAiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2ZhYTQ4ZDJkLTEyYzItNDNkMS1iZjIzLWI1ZTk5ODU3ODI1YlwvZWxseXNpdW1uLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.09GrLTfKzPVtwVCPYdghIuqx7wFUjBnE7KCty5iljpY'
    },
    {
        name: 'car',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe'
    },
    {
        name: "photo",
        image:'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        name: 'nature',
        image: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/07/27/1331737542701_2/moon-hill-natural-bridge-in-china'
    },
    {
        name: 'food',
        image :'https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506201082-GU22QYZJC5TWXRSY24RX/ke17ZwdGBToddI8pDm48kGNs01I8FnOqL190H77UHaVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw5tGdP9CGENvoeKTMsKbMN1Wg-sKsj_EMVySew_V5q0KMshLAGzx4R3EDFOm1kBS/traditional-food-around-the-world-Travlinmad.jpg'
    },
]

export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };



export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id=='${userId}']`;
    return query;
}


//save[] to store who save specific post
export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image {
            asset ->{
                url
            }
        },
        _id,
        destiantion,
        postedBy ->{
            _id,
            userName,
            image
        },
        save[] {         
            _key,
            postedBy ->{
                _id,
                userName,
                image
            },
        },
    }`
    return query;
}

export const feedQuery =`*[_type == 'pin'] | order(_createAt desc){
    image {
        asset ->{
            url
        }
    },
    _id,
    destination,
    postedBy ->{
        _id,
        userName,
        image
    },
    save[] {         
        _key,
        postedBy ->{
            _id,
            userName,
            image
        },
    },
}`