// import React from "react";
// import { CloudArrowDown } from "phosphor-react";

// import { DownloadButtonProps } from "../../../../src/models/Models";
// import { downloadButtonStyle } from "src/utils/default-values";
// import * as S from "./styles";

// export default function DownloadButton({ buttonType }: DownloadButtonProps) {
//   const buttonStyles = downloadButtonStyle[buttonType];

//   return (
//     <S.ButtonContainer
//       $bgColor={buttonStyles["bg_light"]}
//       $textColor={buttonStyles["text_color"]}
//     >
//       <a href="" download={buttonType}>
//         <S.IconWrapper $bgColor={buttonStyles["bg_dark"]}>
//           <CloudArrowDown
//             size={16}
//             color={buttonStyles["text_color"]}
//             weight="bold"
//           />
//         </S.IconWrapper>
//         <div className="button-text">{buttonStyles["label"]}</div>
//       </a>
//     </S.ButtonContainer>
//   );
// }
