import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl'


class About extends Component {


    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Hí Em
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
                            title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>Văn học hay ngữ văn (thường gọi tắt là văn) theo cách nói chung nhất, là bất kỳ tác phẩm nào bằng văn bản. Hiểu theo nghĩa hẹp hơn, thì văn học là dạng văn bản được coi là một hình thức nghệ thuật, hoặc bất kỳ một bài viết nào được coi là có giá trị nghệ thuật hoặc trí tuệ, thường là do cách thức triển khai ngôn ngữ theo những cách khác với cách sử dụng bình thường. Trong các định nghĩa hiện đại hơn, văn học bao hàm cả các văn bản được nói ra hoặc được hát lên (văn học truyền miệng)</p>
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
