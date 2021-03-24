import React from 'react';
import "../App.css"

export default function CreatePost() {
    return (
            <div className="CreatePost">
                <div className="uploadPost border m-5 p-3">
                    <div class="mb-3">
                        <label class="form-label">Author</label>
                        <input type="text" class="form-control" placeholder="Who Wrote It Best" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control" placeholder="Your Title" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Blog Text</label>
                        <textarea class="form-control" placeholder="What do you want to blog about?" />
                    </div>
                </div>
            </div>
    )
}

