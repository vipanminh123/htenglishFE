import React, { Component } from 'react';
import { API_ENDPOINT } from '../../../constants';

class GuidePage extends Component {
	render() {
		return (
			<div className="row">
                        
				<div className="col-sm-10 col-sm-offset-1">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">Guide</h1>
						</div>
						<div className="ibox-content">
							<h3>Lưu ý: Các bạn phải đăng nhập trước khi thực hiện các bước theo hướng dẫn bên dưới.</h3>
							<div className="tabs-container">
								<ul className="nav nav-tabs">
									<li className="active"><a data-toggle="tab" href="#tab-1">Lesson</a></li>
									<li className=""><a data-toggle="tab" href="#tab-2">Word</a></li>
									<li><a data-toggle="tab" href="#tab-3">Phrase</a></li>
								</ul>
								<div className="tab-content">
									<div id="tab-1" className="tab-pane active">
										<div className="panel-body">
											<p>
												<strong>Bước 1: </strong>Chọn bài học
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/A1.png`} />
											</p>
											<p>
												<strong>Bước 2: </strong>Ở Tab write, các bạn lắng nghe cuộc hội thoại sau đó điền vào theo đúng thứ tự.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/A2.png`} />
											</p>
											<p>
												<strong>Bước 3: </strong>Sau khi hoàn tất, click “check” để kiểm tra và “show result” để xem đáp án.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/A3.png`} />
											</p>
										</div>
									</div>
									<div id="tab-2" className="tab-pane">
										<div className="panel-body">
											<strong>Tips:</strong>
											<p>
												Ở Show 10 Entries, các bạn có thể chọn 10, 25, 50, 100 từ để hiển thị 1 lần trong bảng.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B1.png`} />
											</p>
											<p>
												Ở ô Search, các bạn có thể tra từ vựng nhanh.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B2.png`} />
											</p>
											<p>
												Click vào nút play (hình tam giác) trong Audio để nghe.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B3.png`} />
											</p>
											<p>
												Click vào On/Off bên mục Select để chọn từ, sau đó click vào “Add to Storage” để lưu trữ các từ. Các bạn có thể xem lại những  từ đã chọn bằng cách click vào “Go to Storage”.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B4.png`} />
												<br/>
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B5.png`} />
												<br/>
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B6.png`} />
											</p>
											<p>
												Trong Storage, Click nút "LEARN WORD" để học tất cả các từ có trong kho của bạn .Sau khi học xong các từ, các bạn có thể click On/Off và “Remove Word” để loại bỏ các từ ra khỏi Storage. 
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/B7.png`} />
											</p>
										</div>
									</div>
									<div id="tab-3" className="tab-pane">
										<div className="panel-body">
											<strong>Tips:</strong>
											<p>
												Ở Show 10 Entries, các bạn có thể chọn 10, 25, 50, 100 câu để hiển thị 1 lần trong bảng.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C1.png`} />
											</p>
											<p>
												Ở ô Search, các bạn có thể tra câu nhanh.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C2.png`} />
											</p>
											<p>
												Ngoài ra, các bạn có thêm lựa chọn lọc câu (Filter by), để tra câu trong lĩnh vực bạn đang cần quan tâm.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C3.png`} />
											</p>
											<p>
											Click vào nút play (hình tam giác) trong Audio để nghe.
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C4.png`} />
											</p>
											<p>
												Click vào On/Off bên mục Select để chọn câu, sau đó click vào “Add to Storage” để lưu trữ các câu. Các bạn có thể xem lại những  câu đã chọn bằng cách click vào “Go to Storage”.
												<br/>
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C5.png`} />
												<br/>
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C6.png`} />
											</p>
											<p>
												Trong Storage, Click nút "LEARN PHRASE" để học tất cả các câu có trong kho của bạn .Sau khi học xong các câu, các bạn có thể click On/Off và “Remove Word” để loại bỏ các từ ra khỏi Storage. 
												<img alt="" className="m-t img-responsive" src={`${API_ENDPOINT}/public/assets/images/C7.png`} />
											</p>
										</div>
									</div>
								</div>                
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GuidePage;
