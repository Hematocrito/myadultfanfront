import React from "react";
import { Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import styles from "../../../styles/modules/new-post.module.scss";
import NavbarMod from "components/NavbarMod";

export const NewPost = () => {
  return (
    <>
      <NavbarMod />
      <Container sx={{ maxWidth: "620px!important" }}>
        <div className="mt-10" />
        <div className="flex items-center space-x-3 mb-6">
          <Link href='/influencers' >
            <a>
              <ArrowBackIcon />
            </a>
          </Link>
          <div className="text-base md:text-xl font-semibold"> New Post </div>
        </div>
        <div className={styles.content}>
          <div className="grid grid-cols-2 gap-4 text-white text-center text-xs px-10 sm:px-28 xdf mt-3/6 md:mt-8">
            <div className="px-1 pt-8 pb-10 rounded-xl shadow-lg bg-gradient-to-b from-[#05D6F2] to-[#28B2C3]">
              <Link href='/post/new/photo' >      
                <a>
                  <div className="px-7">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12,21.4H4.51A4.38,4.38,0,0,1,0,17c0-3.23,0-6.47,0-9.7a2.52,2.52,0,0,1,1.4-2.11.82.82,0,0,0,.47-.57.87.87,0,0,1,.92-.72c.55,0,1.1,0,1.65,0a1,1,0,0,1,1,.71c0,.06,0,.16.08.16A11.54,11.54,0,0,0,7,4.78c.15,0,.3-.23.4-.39.35-.56.67-1.14,1-1.7a1.22,1.22,0,0,1,1.14-.62q3.36,0,6.73,0a1.21,1.21,0,0,1,1.13.62c.35.58.7,1.16,1,1.76a.6.6,0,0,0,.63.36,4.61,4.61,0,0,1,3.22,1A4.19,4.19,0,0,1,24,9.15c0,2.6,0,5.21,0,7.81a4.36,4.36,0,0,1-4.51,4.44Zm.86-2.72a6.5,6.5,0,1,0-6.48-6.41A6.49,6.49,0,0,0,12.9,18.68ZM5,6.67A1.34,1.34,0,0,0,3.69,5.29,1.32,1.32,0,0,0,2.32,6.65,1.36,1.36,0,1,0,5,6.67Z"
                        fill="#fff"
                      />
                      <path
                        d="M12.92,16.59a4.35,4.35,0,0,1-4.42-4.4,4.42,4.42,0,0,1,4.43-4.43,4.51,4.51,0,0,1,4.43,4.48C17.37,14.5,15.16,16.8,12.92,16.59Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <p>Create a photo post</p>
                </a>
              </Link>
            </div>
            <div className="px-1 py-8 rounded-xl shadow-lg bg-gradient-to-b from-[#05D6F2] to-[#28B2C3]">
              <Link href='/post/new/video' >
                <a>
                  <div className="px-7">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.81,19.3c0,.56,0,1.08,0,1.6,0,.79-.26,1.06-1.05,1.05-4.14,0-8.28,0-12.43,0-.77,0-1.54,0-2.31,0a.69.69,0,0,1-.72-.76q0-4.86,0-9.72a.69.69,0,0,1,.75-.78H19c.57,0,.82.26.82.82v1.82l.23-.13,3.17-2.32a1.37,1.37,0,0,1,.2-.13A.37.37,0,0,1,24,11a1.62,1.62,0,0,1,0,.31v10c0,.23,0,.48-.23.6s-.43,0-.61-.19c-1.06-.76-2.1-1.53-3.16-2.3Z"
                        fill="#fff"
                      />
                      <path
                        d="M7.05,9.68a3.82,3.82,0,1,1,3.8-3.81A3.81,3.81,0,0,1,7.05,9.68Z"
                        fill="#fff"
                      />
                      <path
                        d="M14.05,4.88a2.4,2.4,0,1,1,0,4.8,2.4,2.4,0,0,1,0-4.8Z"
                        fill="#fff"
                      />
                      <path
                        d="M2.22,11.86v6l-.57-.33L.39,16.78A.77.77,0,0,1,0,16.09V13.62A.71.71,0,0,1,.35,13c.59-.38,1.18-.74,1.78-1.1Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <p>Create a video post</p>
                </a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-white text-center text-xs px-10 mt-4 mb-16 sm:px-28 xdf">
            <div className="col-start-2 col-span-2 px-1 pt-8 pb-10 rounded-xl shadow-lg bg-gradient-to-b from-[#05D6F2] to-[#28B2C3] ">
              <Link href='/post/new/text' >
                <a>
                  <div className="px-7">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.67,21.51H2.08A2,2,0,0,1,0,19.46Q0,11,0,2.57a1.89,1.89,0,0,1,2-2q6.93,0,13.86,0A2,2,0,0,1,17.9,2.66c0,3.46,0,6.91,0,10.37a.63.63,0,0,1-.09.39c-.59.73-1.2,1.45-1.9,2.28V4.43a1.61,1.61,0,0,0-1.85-1.85H3.84C2.57,2.58,2,3.16,2,4.43Q2,11,2,17.63c0,1.27.57,1.84,1.85,1.85s2.52,0,3.78,0a.64.64,0,0,1,.43.11C8.61,20.21,9.12,20.85,9.67,21.51Z"
                        fill="#fff"
                      />
                      <path
                        d="M15.21,19.2l5.16-6c.2-.24.4-.48.62-.71a1.73,1.73,0,0,1,2.39-.13,1.7,1.7,0,0,1,.24,2.38c-1,1.21-2,2.38-3,3.57l-3.69,4.32a1.79,1.79,0,0,1-2.86.23c-1.29-1.1-2.56-2.2-3.85-3.29a1.77,1.77,0,0,1-.68-1.85,1.73,1.73,0,0,1,2.85-.88c.85.69,1.68,1.43,2.52,2.15Z"
                        fill="#fff"
                      />
                      <path
                        d="M9,10.46H4.75c-.75,0-1.17-.4-1.16-1a.93.93,0,0,1,.73-.91,2.54,2.54,0,0,1,.61-.07h8.22a2.48,2.48,0,0,1,.61.07.93.93,0,0,1,.74,1,.91.91,0,0,1-.82.93c-.52.05-1,0-1.56,0Z"
                        fill="#fff"
                      />
                      <path
                        d="M9,7.13H4.66a1,1,0,0,1-1-.6.86.86,0,0,1,.18-1,1.44,1.44,0,0,1,.84-.34q4.35,0,8.7,0a1,1,0,0,1,1.11,1c0,.6-.43,1-1.15,1Z"
                        fill="#fff"
                      />
                      <path
                        d="M9,13.74H4.73c-.66,0-1.07-.32-1.13-.85a.91.91,0,0,1,.78-1.05,3,3,0,0,1,.52,0h8.27a3,3,0,0,1,.52,0,.9.9,0,0,1,.81.89.92.92,0,0,1-.74,1,2.29,2.29,0,0,1-.52.05Z"
                        fill="#fff"
                      />
                      <path
                        d="M9.45,15A4.45,4.45,0,0,0,8,16.68a.58.58,0,0,1-.4.23q-1.44,0-2.88,0c-.73,0-1.15-.39-1.14-1S4,15,4.74,15Z"
                        fill="#fff"
                      />
                      <path
                        d="M12.91,15c1.2-.07,1.66.3,1.54,1.25Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <p>Create a text post</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
