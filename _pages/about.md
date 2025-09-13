---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  dl {
    margin-bottom: 50px; /* 控制下方的间距 */
    clear: both;
    font-family: 'Arial', sans-serif; /* 更改字体为更现代的样式 */
  }

  dl dt img {
    width: 380px; /* 调整图片宽度 */
    height: 220px; /* 调整图片高度 */
    object-fit: cover; /* 确保图片按比例裁剪 */
    display: block;
    margin: 12px 12px 12px 0px; /* 调整图片的外边距 */
    
    /* 美化效果 */
    border-radius: 12px; /* 加强圆角效果 */
    border: 3px solid #e0e0e0; /* 使用较浅的边框颜色 */
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1); /* 添加更柔和的阴影效果 */
    padding: 6px; /* 增加内边距 */
    background-color: #fafafa; /* 更柔和的背景色 */
  }

  hr {
    border: 1px solid #f0f0f0; /* 使用更柔和的分隔线 */
    clear: both;
    margin-top: 15px; /* 增加顶部间距 */
    margin-bottom: 15px; /* 增加底部间距 */
  }

  dl dd {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 1.1em; /* 调整字体大小使其更加突出 */
  }

  dl dd strong {
    font-weight: bold;
    color: #333; /* 使用深色文本 */
  }

  .co-first {
    color: #3c6ce7; /* 使用醒目的红色 */
  }

  .down {
    transform: rotate(180deg);
    transition: transform 0.3s ease; /* 增加平滑的旋转过渡效果 */
  }

  .down:hover {
    transform: rotate(0deg); /* 鼠标悬停时恢复原状 */
  }
</style>


{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, my name is Zitong Shi (Chinese: 史梓桐), a 4-year undergraduate student at Wuhan University. 
I have closely collaborated with [Prof. Mang Ye](https://scholar.google.com/citations?user=j-HxRy0AAAAJ&hl=zh-CN), [Prof. Carl J Yang](https://scholar.google.com.hk/citations?hl=zh-CN&user=mOINlwcAAAAJ), [Guancheng Wan](https://scholar.google.com/citations?user=pB8zP9UAAAAJ&hl=zh-CN), 
and [Wenke Huang](https://scholar.google.com/citations?user=aFoCI3MAAAAJ&hl=zh-CN). I am seeking PhD opportunities for Fall 2026.🔥🔥

# 🔍 Research


My academic exploration focuses on the deep analysis and dynamic relationship modeling of graph-structured data. Currently, my research is focused on:

- Large Language Models 🧠
- Multi-agent systems 🤖
- Graph learning 📍

# 🔥 News
- *2025.09*: I joined Microsoft Research Asia (MSRA) as a research intern. .
- *2025.08*: I serve as a reviewer for **AAAI 2026**.
- *2025.05*: 🎉🎉🎉One paper was accepted by **ICML 2025**.
- *2025.01*: 🎉🎉🎉One paper was accepted by **ICLR 2025**. 

# 📃 Publications 

**&dagger; Equal Contribution**   
<dl>
  <dt><img align="left" width="400"
hspace="10" wspace="20" src="../images/FedTGE.png">
</dt>
  <dd><a href="https://openreview.net/forum?id=5Jc7r5aqHJ"><strong>	
Energy-based Backdoor Defense Against Federated Graph Learning
</strong></a></dd>
<dd><strong>Zitong Shi&dagger;</strong>, Guancheng Wan&dagger;,  Wenke Huang, Guibin Zhang, Dacheng Tao, Mang Ye</dd>
<dd> <strong class="co-first"><i>Oral Presentation (1.8%)</i></strong> in International Conference on Learning Representations (<strong>ICLR</strong>), 2025</dd>

</dl>

<dl>
  <dt><img align="left" width="400"
hspace="10" wspace="20" src="../images/EAGLES.png">
</dt>
  <dd><a href=""><strong>	
EAGLES: Towards Effective, Efficient, and Economical Federated Graph Learning via Unified Sparsification
</strong></a></dd>
<dd><strong>Zitong Shi&dagger;</strong><span class="co-first"></span>, Guancheng Wan&dagger;,  Wenke Huang, Guibin Zhang, He Li, Carl Yang, Mang Ye</dd>
<dd> in International Conference on Machine Learning (<strong>ICML</strong>), 2025</dd>

</dl>


<hr>

# 📝 Manuscripts
<dl>
  <dt><img align="left" width="400" hspace="10" wspace="20" src="../images/FocalLoRA.png">
  </dt>
  <dd><a href=""><strong>Don’t Forget the Enjoin: FocalLoRA for Instruction Hierarchical Alignment in Large Language Models</strong></a></dd>
  <dd>under review</dd>
</dl>

[//]: # (<dl>)

[//]: # (  <dt><img align="left" width="400" hspace="10" wspace="20" src="../images/EPEAgent.png">)

[//]: # (  </dt>)

[//]: # (  <dd><a href=""><strong>Privacy-Enhancing Paradigms within Federated Multi-Agent Systems</strong></a></dd>)

[//]: # (  <dd>under review</dd>)

[//]: # (</dl>)

<dl>
  <dt><img align="left" width="400" hspace="10" wspace="20" src="../images/TRUST.png">
  </dt>
  <dd><a href=""><strong>Multi-order Orchestrated Curriculum Distillation for Model-Heterogeneous Federated Graph Learning</strong></a></dd>
  <dd>under review</dd>
</dl>

<dl>
  <dt><img align="left" width="400" hspace="10" wspace="20" src="../images/GraphLLM.png">
  </dt>
  <dd><a href=""><strong>Towards Robust Text-Attributed Federated Graph Learning: Multimodal Threats and Defense</strong></a></dd>
  <dd>under review</dd>
</dl>

<hr>

# 🎡 Service
## Conference Committee Member

- Reviewer for ICML'2025
- Reviewer for AAAI'2026

##  Journal Reviewer
- Reviewer for IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
- Reviewer for IEEE Transactions on Image Processing (TIP)
<!-- - Reviewer for Data-centric Machine Learning Research (DMLR) -->

<hr>

<br/>

[//]: # (# 🎖 Scholarships and Honors)

[//]: # ()
[//]: # (<br/>)

[//]: # ()
[//]: # (<hr>)

# 💼 Experience

<div style="margin-bottom: 40px;">
  <div style="display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1; font-size: 1.1em;">
      <strong>MSRA </strong><br/>
      Internship, 2025.09 - Now<br/>
    Topic: Safety AI<br/>
    </div>
    <div style="flex-shrink: 0; max-width: 100px;">
      <img src="../images/img.png" alt="Microsoft Logo" style="width: 100%; height: auto; object-fit: contain;" />
    </div>
  </div>
</div>


# 📖 Education

<div style="margin-bottom: 40px;">
  <div style="display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1; font-size: 1.1em;">
      <strong>2022.09 - Now</strong><br/>
      Undergraduate, School of Computer Science, Wuhan University<br/>
    </div>
    <div style="flex-shrink: 0; max-width: 100px;">
      <img src="../images/WHU.jpeg" alt="Wuhan University Logo" style="width: 100%; height: auto; object-fit: contain;" />
    </div>
  </div>
</div>

[//]: # (<div style="margin-bottom: 40px;">)

[//]: # (  <div style="display: flex; align-items: center; gap: 20px;">)

[//]: # (    <div style="flex: 1; font-size: 1.1em;">)

[//]: # (      <strong>2019.09 - 2022.06</strong><br/>)

[//]: # (      High School: Xiaochang First High School<br/>)

[//]: # (    </div>)

[//]: # (    <div style="flex-shrink: 0; max-width: 100px;">)

[//]: # (      <img src="highschool-logo.png" alt="High School Logo" style="width: 100%; height: auto; object-fit: contain;" />)

[//]: # (    </div>)

[//]: # (  </div>)

[//]: # (</div>)










<br/>






