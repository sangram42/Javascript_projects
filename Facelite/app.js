//select elements
const msg1 = document.querySelector('.messages');
const feeds1 = document.querySelector(".feeds");
const frndRqsts = document.querySelector(".frnd-requests");
const storie1 = document.querySelector(".stories");

//render feeds

function renderfeeds() {
    feeds.forEach((feed) => {
        feeds1.innerHTML += `

            <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="log">
                                    <img src=${feed.log} alt="">
                                </div>
                                <div class="info">
                                    <a>
                                        <h3>${feed.name}</h3>
                                    </a>
                                    <p>${feed.about}</p>
                                </div>
                            </div>
                        </div>

                        <div class="photo">
                            <img src=${feed.photo} alt="" class="im">
                        </div>

                        <div class="liked-by">
                            <span class="like-img"><img src="images/clarisse-meyer-HoYIncR3AQ8-unsplash.jpg"
                                    alt=""></span>
                            <span class="like-img"><img src="images/melissa-askew-tSlvoSZK77c-unsplash.jpg"
                                    alt=""></span>
                            <span class="like-img"><img src="images/sam-manns-p0ZvBVpW3KY-unsplash.jpg" alt=""></span>
                            <p>Liked by <b>${feed.likedby}</b> and <b>${feed.totollikes} others</b></p>
                        </div>

            </div>
        
        `;
    });
}

function rendermsgs() {
    msgs.forEach((msg)=>{
        msg1.innerHTML += `
            <div class="message">
                        <div class="log">
                            <img src=${msg.img} alt="">
                            <div class="online"></div>
                        </div>
                        <div class="msg-body">
                            <h5>${msg.name}</h5>
                            <h5 class="text-muted2">${msg.text} </h3>
                        </div>
            </div>
        `;
    });
}

function renderfrndrqst() {
    rqst.forEach((rqsts)=>{
        frndRqsts.innerHTML += `
            <div class="frnd-request">
                        <div class="rqst-info">
                            <div class="log">
                                <img src=${rqsts.img} alt="">
                            </div>
                            <div class="msg-body">
                                <h5>${rqsts.name}</h5>
                                <hg class="text-muted2">${rqsts.mutuals} friends</hg>
                            </div>
                        </div>
                        <div class="rqst-btns">
                            <button class="rqst-btn">
                                Accept
                            </button>
                            <button class="rqst-btn btn-gray">
                                Decline
                            </button>
                        </div>
            </div>
        `;
    });
}

function renderstories() {
    stories.forEach((story)=>{
        storie1.innerHTML += `
            <div class="story">
                        <div class="profile-photo">
                            <img src=${story.img} alt="">
                        </div>
                        <p class="name">${story.name}</p>
            </div>
        `;
    });
}

renderstories();
renderfeeds();
rendermsgs();
renderfrndrqst();